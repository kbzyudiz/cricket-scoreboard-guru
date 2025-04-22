
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { PlayerCard, PlayerProps } from "@/components/teams/PlayerCard";
import { SelectedPlayers } from "@/components/teams/SelectedPlayers";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for players
const TEAM1_PLAYERS: Omit<PlayerProps, "onSelect" | "selected" | "disabled">[] = [
  {
    id: "p1",
    name: "Virat Kohli",
    team: "India",
    battingAvg: 58.7,
    strikeRate: 93.6,
    recentForm: ["112", "74", "45", "0", "87"],
  },
  {
    id: "p2",
    name: "Rohit Sharma",
    team: "India",
    battingAvg: 49.2,
    strikeRate: 96.4,
    recentForm: ["83", "42", "119", "7", "35"],
  },
  {
    id: "p3",
    name: "KL Rahul",
    team: "India",
    battingAvg: 45.8,
    strikeRate: 88.5,
    recentForm: ["62", "37", "15", "88", "23"],
  },
  {
    id: "p4",
    name: "Shubman Gill",
    team: "India",
    battingAvg: 42.3,
    strikeRate: 102.7,
    recentForm: ["55", "12", "78", "41", "67"],
  },
  {
    id: "p5",
    name: "Shreyas Iyer",
    team: "India",
    battingAvg: 41.4,
    strikeRate: 97.2,
    recentForm: ["18", "43", "92", "35", "22"],
  },
];

const TEAM2_PLAYERS: Omit<PlayerProps, "onSelect" | "selected" | "disabled">[] = [
  {
    id: "p6",
    name: "Steve Smith",
    team: "Australia",
    battingAvg: 44.8,
    strikeRate: 87.9,
    recentForm: ["45", "87", "32", "105", "22"],
  },
  {
    id: "p7",
    name: "David Warner",
    team: "Australia",
    battingAvg: 45.7,
    strikeRate: 96.8,
    recentForm: ["78", "12", "65", "22", "91"],
  },
  {
    id: "p8",
    name: "Marnus Labuschagne",
    team: "Australia",
    battingAvg: 39.7,
    strikeRate: 85.2,
    recentForm: ["42", "53", "65", "12", "87"],
  },
  {
    id: "p9",
    name: "Glenn Maxwell",
    team: "Australia",
    battingAvg: 35.4,
    strikeRate: 124.8,
    recentForm: ["66", "38", "14", "95", "22"],
  },
  {
    id: "p10",
    name: "Travis Head",
    team: "Australia",
    battingAvg: 38.2,
    strikeRate: 98.7,
    recentForm: ["25", "52", "13", "78", "65"],
  },
];

// Mock data for match details
const matchDetails = {
  team1: "India",
  team2: "Australia",
  date: "2025-05-02T09:30:00",
  venue: "MCG, Melbourne",
};

const TeamSelect = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [team1Players, setTeam1Players] = useState<Omit<PlayerProps, "onSelect" | "selected" | "disabled">[]>([]);
  const [team2Players, setTeam2Players] = useState<Omit<PlayerProps, "onSelect" | "selected" | "disabled">[]>([]);
  
  useEffect(() => {
    // In a real app, fetch player data for the specific match
    // For demo, using mock data
    setTeam1Players(TEAM1_PLAYERS);
    setTeam2Players(TEAM2_PLAYERS);
  }, [matchId]);
  
  const handlePlayerSelect = (playerId: string) => {
    if (selectedPlayers.includes(playerId)) {
      // Deselect player
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
    } else {
      // Select player (max 2)
      if (selectedPlayers.length < 2) {
        setSelectedPlayers([...selectedPlayers, playerId]);
      } else {
        toast({
          title: "Selection limit reached",
          description: "You can select a maximum of 2 batsmen per match",
          variant: "destructive",
        });
      }
    }
  };
  
  const handleSubmit = () => {
    if (selectedPlayers.length === 0) {
      toast({
        title: "No players selected",
        description: "Please select at least one batsman to continue",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, save the selections to the server
    toast({
      title: "Team saved",
      description: "Your player selections have been saved successfully!",
    });
    
    navigate("/dashboard");
  };
  
  // Get the full player objects for selected players
  const getSelectedPlayerObjects = () => {
    const allPlayers = [...team1Players, ...team2Players];
    return allPlayers.filter(player => selectedPlayers.includes(player.id));
  };

  return (
    <AppLayout>
      <div className="space-y-6 pb-20">
        <h1 className="text-2xl font-bold">Select Your Batsmen</h1>
        <p className="text-gray-600">
          Pick up to 2 batsmen who you think will score the most runs in this match.
        </p>
        
        <SelectedPlayers 
          players={getSelectedPlayerObjects()} 
          matchDetails={matchDetails} 
        />
        
        <Tabs defaultValue="team1">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="team1">{matchDetails.team1}</TabsTrigger>
            <TabsTrigger value="team2">{matchDetails.team2}</TabsTrigger>
          </TabsList>
          <TabsContent value="team1" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {team1Players.map((player) => (
                <PlayerCard 
                  key={player.id}
                  {...player}
                  selected={selectedPlayers.includes(player.id)}
                  onSelect={handlePlayerSelect}
                  disabled={selectedPlayers.length >= 2 && !selectedPlayers.includes(player.id)}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="team2" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {team2Players.map((player) => (
                <PlayerCard 
                  key={player.id}
                  {...player}
                  selected={selectedPlayers.includes(player.id)}
                  onSelect={handlePlayerSelect}
                  disabled={selectedPlayers.length >= 2 && !selectedPlayers.includes(player.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t z-40">
          <div className="container mx-auto">
            <Button 
              className="w-full sm:w-auto" 
              size="lg"
              onClick={handleSubmit}
            >
              Save Selection
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TeamSelect;

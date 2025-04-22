
import { AppLayout } from "@/components/layout/AppLayout";
import { MatchLeaderboard } from "@/components/leaderboard/MatchLeaderboard";
import { TournamentLeaderboard } from "@/components/leaderboard/TournamentLeaderboard";
import { PlayerSelectionsList } from "@/components/leaderboard/PlayerSelectionsList";
import { YourStats } from "@/components/leaderboard/YourStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for user stats
const userStats = {
  totalPoints: 475,
  rank: 5,
  matchesPlayed: 5,
  bestMatch: {
    points: 156,
    match: "India vs Australia",
    date: "15 Apr 2025",
  },
  selectedPlayers: 10,
  averagePointsPerMatch: 95,
};

const Leaderboard = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">IPL 2025 Leaderboard</h1>
        
        <YourStats stats={userStats} />
        
        <Tabs defaultValue="tournament">
          <TabsList>
            <TabsTrigger value="tournament">Tournament</TabsTrigger>
            <TabsTrigger value="match">Latest Match</TabsTrigger>
            <TabsTrigger value="selections">Player Selections</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tournament" className="pt-4">
            <TournamentLeaderboard />
          </TabsContent>
          
          <TabsContent value="match" className="pt-4">
            <MatchLeaderboard matchId="4" />
          </TabsContent>
          
          <TabsContent value="selections" className="pt-4">
            <PlayerSelectionsList />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Leaderboard;

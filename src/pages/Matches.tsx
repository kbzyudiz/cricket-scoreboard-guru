import { AppLayout } from "@/components/layout/AppLayout";
import { MatchCard, MatchProps } from "@/components/dashboard/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for upcoming matches - IPL 2025
const upcomingMatches: MatchProps[] = [
  {
    id: "2",
    team1: "GT",
    team2: "MI",
    venue: "Narendra Modi Stadium, Ahmedabad",
    date: "2025-03-23T19:30:00",
    status: "upcoming",
  },
  {
    id: "3",
    team1: "DC",
    team2: "PBKS",
    venue: "Arun Jaitley Stadium, Delhi",
    date: "2025-03-24T19:30:00",
    status: "upcoming",
  },
  {
    id: "4",
    team1: "KKR",
    team2: "SRH",
    venue: "Eden Gardens, Kolkata",
    date: "2025-03-25T19:30:00",
    status: "upcoming",
  },
];

// Mock data for live matches
const liveMatches: MatchProps[] = [
  {
    id: "1",
    team1: "CSK",
    team2: "RCB",
    venue: "MA Chidambaram Stadium, Chennai",
    date: "2025-03-22T19:30:00",
    status: "live",
    score1: "182/4 (16.2)",
    score2: "125/3 (12.0)",
  },
];

// Mock data for completed matches
const completedMatches: MatchProps[] = [
  {
    id: "5",
    team1: "LSG",
    team2: "RR",
    venue: "Ekana Cricket Stadium, Lucknow",
    date: "2025-03-21T19:30:00",
    status: "completed",
    score1: "189/6 (20)",
    score2: "192/4 (19.2)",
  },
  {
    id: "6",
    team1: "RCB",
    team2: "PBKS",
    venue: "M Chinnaswamy Stadium, Bengaluru",
    date: "2025-03-20T19:30:00",
    status: "completed",
    score1: "204/8 (20)",
    score2: "186/8 (20)",
  },
];

const Matches = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Matches</h1>
        
        <Tabs defaultValue="live">
          <TabsList>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="live" className="pt-4">
            {liveMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {liveMatches.map((match) => (
                  <MatchCard key={match.id} {...match} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No matches are currently live.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingMatches.map((match) => (
                <MatchCard key={match.id} {...match} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {completedMatches.map((match) => (
                <MatchCard key={match.id} {...match} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Matches;

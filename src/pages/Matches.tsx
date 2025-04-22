
import { AppLayout } from "@/components/layout/AppLayout";
import { MatchCard, MatchProps } from "@/components/dashboard/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for upcoming matches
const upcomingMatches: MatchProps[] = [
  {
    id: "1",
    team1: "India",
    team2: "Australia",
    venue: "MCG, Melbourne",
    date: "2025-05-02T09:30:00",
    status: "upcoming",
  },
  {
    id: "2",
    team1: "England",
    team2: "South Africa",
    venue: "Lords, London",
    date: "2025-05-03T10:00:00",
    status: "upcoming",
  },
  {
    id: "3",
    team1: "New Zealand",
    team2: "West Indies",
    venue: "Eden Park, Auckland",
    date: "2025-05-05T08:00:00",
    status: "upcoming",
  },
];

// Mock data for live matches
const liveMatches: MatchProps[] = [
  {
    id: "4",
    team1: "Pakistan",
    team2: "Sri Lanka",
    venue: "Gaddafi Stadium, Lahore",
    date: "2025-04-22T10:00:00",
    status: "live",
    score1: "212/4 (35.2)",
    score2: "145/3 (22.0)",
  },
];

// Mock data for completed matches
const completedMatches: MatchProps[] = [
  {
    id: "5",
    team1: "Bangladesh",
    team2: "Zimbabwe",
    venue: "Shere Bangla Stadium, Dhaka",
    date: "2025-04-20T09:00:00",
    status: "completed",
    score1: "278/7 (50)",
    score2: "240/10 (47.3)",
  },
  {
    id: "6",
    team1: "Afghanistan",
    team2: "Ireland",
    venue: "Greater Noida Sports Complex",
    date: "2025-04-19T09:30:00",
    status: "completed",
    score1: "265/8 (50)",
    score2: "219/10 (45.2)",
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

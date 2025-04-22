
import { AppLayout } from "@/components/layout/AppLayout";
import { MatchCard, MatchProps } from "@/components/dashboard/MatchCard";

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

const Teams = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Team Selection</h1>
        <p className="text-gray-600">
          Select your favorite batsmen for upcoming matches. You can select up to 2 batsmen per match.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingMatches.map((match) => (
            <MatchCard key={match.id} {...match} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Teams;

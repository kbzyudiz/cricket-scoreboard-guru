
import { MatchCard, MatchProps } from "./MatchCard";

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

export function UpcomingMatches() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Upcoming Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  );
}

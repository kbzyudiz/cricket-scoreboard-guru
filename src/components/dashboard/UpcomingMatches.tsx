
import { MatchCard, MatchProps } from "./MatchCard";

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

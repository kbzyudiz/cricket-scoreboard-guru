
import { MatchCard, MatchProps } from "./MatchCard";

// Mock data for recent matches - IPL 2025
const recentMatches: MatchProps[] = [
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

export function RecentMatches() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Recent Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentMatches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  );
}

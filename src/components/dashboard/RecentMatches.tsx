
import { MatchCard, MatchProps } from "./MatchCard";

// Mock data for recent matches
const recentMatches: MatchProps[] = [
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

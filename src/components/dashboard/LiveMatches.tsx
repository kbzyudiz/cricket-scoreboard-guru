
import { MatchCard, MatchProps } from "./MatchCard";

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

export function LiveMatches() {
  if (liveMatches.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-cricket-ball">Live Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {liveMatches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  );
}

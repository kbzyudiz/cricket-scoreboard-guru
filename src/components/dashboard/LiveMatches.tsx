
import { MatchCard, MatchProps } from "./MatchCard";

// Mock data for live matches - IPL 2025
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

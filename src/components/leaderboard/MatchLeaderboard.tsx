
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LeaderboardTable } from "./LeaderboardTable";
import { Badge } from "@/components/ui/badge";

interface PlayerScore {
  name: string;
  team: string;
  score: number;
}

interface MatchLeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  players: [PlayerScore, PlayerScore];
  totalPoints: number;
  isCurrentUser?: boolean;
}

// Mock data for match leaderboard with player details
const matchLeaderboard: MatchLeaderboardEntry[] = [
  {
    rank: 1,
    userId: "user1",
    name: "Ravi Singh",
    players: [
      { name: "Virat Kohli", team: "RCB", score: 82 },
      { name: "Jos Buttler", team: "RR", score: 74 }
    ],
    totalPoints: 156,
  },
  {
    rank: 2,
    userId: "user2",
    name: "Ankit Sharma",
    players: [
      { name: "Rohit Sharma", team: "MI", score: 65 },
      { name: "David Warner", team: "DC", score: 77 }
    ],
    totalPoints: 142,
  },
  {
    rank: 3,
    userId: "user3",
    name: "Priya Patel",
    players: [
      { name: "KL Rahul", team: "LSG", score: 89 },
      { name: "Shubman Gill", team: "GT", score: 46 }
    ],
    totalPoints: 135,
  },
  {
    rank: 4,
    userId: "user4",
    name: "John Smith",
    players: [
      { name: "Faf du Plessis", team: "RCB", score: 71 },
      { name: "Devon Conway", team: "CSK", score: 50 }
    ],
    totalPoints: 121,
    isCurrentUser: true,
  },
  {
    rank: 5,
    userId: "user5",
    name: "Rahul Kumar",
    players: [
      { name: "MS Dhoni", team: "CSK", score: 45 },
      { name: "Mitchell Marsh", team: "DC", score: 73 }
    ],
    totalPoints: 118,
  },
];

export function MatchLeaderboard({ matchId }: { matchId: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">Match Leaderboard</h3>
        <p className="text-sm text-gray-500">
          RCB vs CSK | 22 Apr 2025
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {matchLeaderboard.map((entry) => (
            <div
              key={entry.userId}
              className={`p-4 rounded-lg border ${
                entry.isCurrentUser ? "bg-primary/5 border-primary" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold">#{entry.rank}</span>
                  <span className="font-medium">{entry.name}</span>
                  {entry.isCurrentUser && (
                    <Badge variant="outline" className="ml-2">
                      You
                    </Badge>
                  )}
                </div>
                <div className="font-bold text-lg">
                  {entry.totalPoints} points
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {entry.players.map((player, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-muted/50 p-2 rounded">
                    <div>
                      <div className="font-medium">{player.name}</div>
                      <Badge variant="outline" className="mt-1">
                        {player.team}
                      </Badge>
                    </div>
                    <div className="font-mono font-medium">
                      {player.score} pts
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}


import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LeaderboardTable, LeaderboardEntry } from "./LeaderboardTable";

// Mock data for match leaderboard
const matchLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: "user1",
    name: "Ravi Singh",
    points: 156,
    matchesPlayed: 1,
  },
  {
    rank: 2,
    userId: "user2",
    name: "Ankit Sharma",
    points: 142,
    matchesPlayed: 1,
  },
  {
    rank: 3,
    userId: "user3",
    name: "Priya Patel",
    points: 135,
    matchesPlayed: 1,
  },
  {
    rank: 4,
    userId: "user4",
    name: "John Smith",
    points: 121,
    matchesPlayed: 1,
    isCurrentUser: true,
  },
  {
    rank: 5,
    userId: "user5",
    name: "Rahul Kumar",
    points: 118,
    matchesPlayed: 1,
  },
  {
    rank: 6,
    userId: "user6",
    name: "Michael Brown",
    points: 105,
    matchesPlayed: 1,
  },
  {
    rank: 7,
    userId: "user7",
    name: "Sarah Wilson",
    points: 98,
    matchesPlayed: 1,
  },
  {
    rank: 8,
    userId: "user8",
    name: "David Miller",
    points: 87,
    matchesPlayed: 1,
  },
  {
    rank: 9,
    userId: "user9",
    name: "Amanda Lee",
    points: 72,
    matchesPlayed: 1,
  },
  {
    rank: 10,
    userId: "user10",
    name: "Vikram Agarwal",
    points: 65,
    matchesPlayed: 1,
  },
];

export function MatchLeaderboard({ matchId }: { matchId: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">Match Leaderboard</h3>
        <p className="text-sm text-gray-500">
          Pakistan vs Sri Lanka | 22 Apr 2025
        </p>
      </CardHeader>
      <CardContent>
        <LeaderboardTable entries={matchLeaderboard} />
      </CardContent>
    </Card>
  );
}

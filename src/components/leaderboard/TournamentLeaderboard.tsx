import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LeaderboardTable, LeaderboardEntry } from "./LeaderboardTable";

// Mock data for IPL 2025 tournament leaderboard
const tournamentLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: "user5",
    name: "Rahul Kumar",
    points: 578,
    matchesPlayed: 8,
  },
  {
    rank: 2,
    userId: "user2",
    name: "Ankit Sharma",
    points: 562,
    matchesPlayed: 5,
  },
  {
    rank: 3,
    userId: "user1",
    name: "Ravi Singh",
    points: 535,
    matchesPlayed: 5,
  },
  {
    rank: 4,
    userId: "user8",
    name: "David Miller",
    points: 489,
    matchesPlayed: 5,
  },
  {
    rank: 5,
    userId: "user4",
    name: "John Smith",
    points: 475,
    matchesPlayed: 5,
    isCurrentUser: true,
  },
  {
    rank: 6,
    userId: "user3",
    name: "Priya Patel",
    points: 432,
    matchesPlayed: 4,
  },
  {
    rank: 7,
    userId: "user9",
    name: "Amanda Lee",
    points: 410,
    matchesPlayed: 4,
  },
  {
    rank: 8,
    userId: "user7",
    name: "Sarah Wilson",
    points: 398,
    matchesPlayed: 4,
  },
  {
    rank: 9,
    userId: "user6",
    name: "Michael Brown",
    points: 365,
    matchesPlayed: 4,
  },
  {
    rank: 10,
    userId: "user10",
    name: "Vikram Agarwal",
    points: 342,
    matchesPlayed: 3,
  },
];

export function TournamentLeaderboard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">Tournament Leaderboard</h3>
        <p className="text-sm text-gray-500">
          IPL 2025
        </p>
      </CardHeader>
      <CardContent>
        <LeaderboardTable entries={tournamentLeaderboard} />
      </CardContent>
    </Card>
  );
}

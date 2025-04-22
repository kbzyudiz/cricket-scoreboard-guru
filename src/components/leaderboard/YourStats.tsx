
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserStats {
  totalPoints: number;
  rank: number;
  matchesPlayed: number;
  bestMatch: {
    points: number;
    match: string;
    date: string;
  };
  selectedPlayers: number;
  averagePointsPerMatch: number;
}

export function YourStats({ stats }: { stats: UserStats }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">Your Performance</h3>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Total Points</p>
            <p className="text-2xl font-bold">{stats.totalPoints}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Rank</p>
            <p className="text-2xl font-bold">#{stats.rank}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Matches Played</p>
            <p className="text-2xl font-bold">{stats.matchesPlayed}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg col-span-2 md:col-span-3">
            <p className="text-sm text-gray-500">Best Performance</p>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="font-medium">{stats.bestMatch.match}</p>
                <p className="text-xs text-gray-500">{stats.bestMatch.date}</p>
              </div>
              <Badge className="bg-primary">
                {stats.bestMatch.points} points
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

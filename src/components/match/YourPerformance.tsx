
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

interface PlayerPerformance {
  id: string;
  name: string;
  team: string;
  photoUrl?: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  points: number;
}

export function YourPerformance({ players }: { players: PlayerPerformance[] }) {
  const totalPoints = players.reduce((sum, player) => sum + player.points, 0);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Your Selections Performance</h3>
          <Badge className="bg-primary">
            {totalPoints} points
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.length === 0 ? (
            <p className="text-gray-500 text-center py-4">You haven't selected any players for this match</p>
          ) : (
            players.map((player) => (
              <div key={player.id} className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-3 border-b flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <img
                        src={player.photoUrl || "/assets/logo.svg"}
                        alt={player.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/assets/logo.svg";
                        }}
                      />
                    </Avatar>
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-xs text-gray-500">{player.team}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    {player.points} pts
                  </Badge>
                </div>
                <div className="p-3 grid grid-cols-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500">Runs</p>
                    <p className="font-mono font-bold">{player.runs}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Balls</p>
                    <p className="font-mono">{player.balls}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">4s</p>
                    <p className="font-mono">{player.fours}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">6s</p>
                    <p className="font-mono">{player.sixes}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}

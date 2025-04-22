
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

// Mock selected players
const selectedPlayers = [
  {
    id: "p1",
    matchId: "4",
    name: "Virat Kohli",
    team: "India",
    photoUrl: "/assets/players/virat-kohli.jpg",
  },
  {
    id: "p2",
    matchId: "4",
    name: "Rohit Sharma",
    team: "India",
    photoUrl: "/assets/players/rohit-sharma.jpg",
  },
];

export function YourTeams() {
  if (selectedPlayers.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Your Selected Batsmen</h2>
      <Card>
        <CardHeader className="pb-2">
          <h3 className="font-semibold text-sm text-gray-500">Pakistan vs Sri Lanka</h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-6">
            {selectedPlayers.map((player) => (
              <div key={player.id} className="flex flex-col items-center">
                <Avatar className="h-16 w-16 mb-2">
                  <img
                    src={player.photoUrl}
                    alt={player.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/logo.svg";
                    }}
                  />
                </Avatar>
                <span className="font-medium text-sm">{player.name}</span>
                <span className="text-xs text-gray-500">{player.team}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

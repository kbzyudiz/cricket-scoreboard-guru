
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlayerProps } from "./PlayerCard";

interface SelectedPlayersProps {
  players: Omit<PlayerProps, "onSelect" | "selected" | "disabled">[];
  matchDetails: {
    team1: string;
    team2: string;
    date: string;
    venue: string;
  };
}

export function SelectedPlayers({ players, matchDetails }: SelectedPlayersProps) {
  if (players.length === 0) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Your Selection</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No players selected yet</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">Your Selection</h3>
        <p className="text-sm text-gray-500">{matchDetails.team1} vs {matchDetails.team2}</p>
        <p className="text-xs text-gray-500">{new Date(matchDetails.date).toLocaleString()}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.map((player) => (
            <div key={player.id} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-md">
              <div className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center overflow-hidden">
                <img
                  src={player.photoUrl || "/assets/logo.svg"}
                  alt={player.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/assets/logo.svg";
                  }}
                />
              </div>
              <div>
                <p className="font-medium">{player.name}</p>
                <p className="text-xs text-gray-500">{player.team}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-medium">Avg: {player.battingAvg}</p>
                <p className="text-xs text-gray-500">SR: {player.strikeRate}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

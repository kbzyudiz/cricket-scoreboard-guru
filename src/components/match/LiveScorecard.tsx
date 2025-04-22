
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Player {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  status: string;
  isSelected?: boolean;
}

interface BowlingFigures {
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

interface InningsProps {
  team: string;
  score: string;
  overs: string;
  batsmen: Player[];
  bowlers: BowlingFigures[];
  isLive: boolean;
}

export function LiveScorecard({ 
  innings, 
  matchInfo 
}: { 
  innings: InningsProps[]; 
  matchInfo: { 
    team1: string; 
    team2: string; 
    venue: string; 
    status: string; 
    toss?: string; 
    lastUpdate?: string; 
  } 
}) {
  const currentInnings = innings[innings.length - 1];
  const isBatFirst = innings.length > 1;

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="bg-cricket-dark-green text-white p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{matchInfo.team1} vs {matchInfo.team2}</h2>
            <Badge variant="destructive" className={`${matchInfo.status === "Live" ? "animate-pulse-score" : ""}`}>
              {matchInfo.status}
            </Badge>
          </div>
          <p className="text-sm opacity-80">{matchInfo.venue}</p>
          {matchInfo.toss && <p className="text-sm opacity-80 mt-1">{matchInfo.toss}</p>}
        </div>

        <CardContent className="p-0">
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{currentInnings.team}</h3>
                <p className="text-cricket-ball font-bold text-2xl">{currentInnings.score}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Overs</p>
                <p className="font-mono font-bold text-lg">{currentInnings.overs}</p>
              </div>
            </div>
            {isBatFirst && (
              <div className="mt-2 text-sm">
                <span className="font-medium">{innings[0].team}: </span>
                <span>{innings[0].score}</span>
              </div>
            )}
          </div>

          <div className="p-4">
            <h4 className="font-medium mb-2">Batsmen</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr className="text-left">
                    <th className="px-2 py-1.5 font-medium">Batter</th>
                    <th className="px-2 py-1.5 font-medium text-right">R</th>
                    <th className="px-2 py-1.5 font-medium text-right">B</th>
                    <th className="px-2 py-1.5 font-medium text-right">4s</th>
                    <th className="px-2 py-1.5 font-medium text-right">6s</th>
                    <th className="px-2 py-1.5 font-medium text-right">SR</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {currentInnings.batsmen.map((batter, index) => (
                    <tr key={index} className={`${batter.isSelected ? "bg-green-50" : ""}`}>
                      <td className="px-2 py-1.5 flex items-center">
                        <span className={batter.isSelected ? "font-bold text-primary" : ""}>
                          {batter.name} 
                        </span>
                        {batter.status && (
                          <span className="ml-1 text-xs text-gray-500 italic">
                            {batter.status}
                          </span>
                        )}
                        {batter.isSelected && (
                          <Badge variant="outline" className="ml-2 text-xs">Your Pick</Badge>
                        )}
                      </td>
                      <td className="px-2 py-1.5 text-right font-mono">{batter.runs}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{batter.balls}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{batter.fours}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{batter.sixes}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{batter.strikeRate.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          <div className="p-4">
            <h4 className="font-medium mb-2">Bowlers</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr className="text-left">
                    <th className="px-2 py-1.5 font-medium">Bowler</th>
                    <th className="px-2 py-1.5 font-medium text-right">O</th>
                    <th className="px-2 py-1.5 font-medium text-right">M</th>
                    <th className="px-2 py-1.5 font-medium text-right">R</th>
                    <th className="px-2 py-1.5 font-medium text-right">W</th>
                    <th className="px-2 py-1.5 font-medium text-right">Econ</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {currentInnings.bowlers.map((bowler, index) => (
                    <tr key={index}>
                      <td className="px-2 py-1.5">{bowler.name}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{bowler.overs.toFixed(1)}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{bowler.maidens}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{bowler.runs}</td>
                      <td className="px-2 py-1.5 text-right font-mono font-bold">{bowler.wickets}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{bowler.economy.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>

        {matchInfo.lastUpdate && (
          <div className="bg-gray-50 p-2 text-xs text-center text-gray-500 border-t">
            Last updated: {matchInfo.lastUpdate}
          </div>
        )}
      </Card>
    </div>
  );
}

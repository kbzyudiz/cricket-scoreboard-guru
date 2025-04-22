
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlayerScore {
  name: string;
  runs: number;
  balls: number;
}

interface TeamScore {
  team: string;
  score: string;
  overs: string;
  topBatsman: PlayerScore;
  topBowler: {
    name: string;
    wickets: number;
    runs: number;
  };
}

interface MatchSummaryProps {
  teams: {
    team1: string;
    team2: string;
    logo1?: string;
    logo2?: string;
  };
  result: string;
  motm: string;
  scores: TeamScore[];
  venue: string;
  date: string;
}

export function MatchSummary({
  teams,
  result,
  motm,
  scores,
  venue,
  date,
}: MatchSummaryProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card>
      <CardHeader className="bg-cricket-dark-green text-white">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold">{teams.team1} vs {teams.team2}</h2>
            <p className="text-sm opacity-90">{venue}</p>
            <p className="text-sm opacity-90">{formattedDate}</p>
          </div>
          <Badge className="md:self-start bg-white text-cricket-dark-green">
            Match Completed
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="p-4 bg-gray-50 border-b">
          <h3 className="font-semibold text-lg mb-2">Result</h3>
          <p>{result}</p>
          <p className="mt-2"><span className="font-medium">Player of the Match:</span> {motm}</p>
        </div>

        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          {scores.map((score, index) => (
            <div key={index} className="p-4">
              <h3 className="font-semibold">{score.team}</h3>
              <p className="text-2xl font-bold mt-1">{score.score}</p>
              <p className="text-sm text-gray-500">{score.overs} overs</p>

              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-sm font-medium">Top Batsman</p>
                  <div className="flex justify-between">
                    <p>{score.topBatsman.name}</p>
                    <p className="font-mono font-medium">
                      {score.topBatsman.runs} ({score.topBatsman.balls})
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium">Top Bowler</p>
                  <div className="flex justify-between">
                    <p>{score.topBowler.name}</p>
                    <p className="font-mono font-medium">
                      {score.topBowler.wickets}/{score.topBowler.runs}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

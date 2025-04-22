
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { LiveScorecard } from "@/components/match/LiveScorecard";
import { MatchSummary } from "@/components/match/MatchSummary";
import { YourPerformance } from "@/components/match/YourPerformance";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for live match
const liveScorecardData = {
  innings: [
    {
      team: "Pakistan",
      score: "212/4",
      overs: "35.2",
      batsmen: [
        { name: "Babar Azam", runs: 78, balls: 80, fours: 7, sixes: 1, strikeRate: 97.5, status: "not out", isSelected: true },
        { name: "Mohammad Rizwan", runs: 45, balls: 42, fours: 4, sixes: 2, strikeRate: 107.1, status: "not out" },
        { name: "Fakhar Zaman", runs: 35, balls: 40, fours: 3, sixes: 1, strikeRate: 87.5, status: "c Shanaka b Hasaranga" },
        { name: "Imam-ul-Haq", runs: 42, balls: 50, fours: 4, sixes: 0, strikeRate: 84.0, status: "b Chameera" },
        { name: "Shadab Khan", runs: 12, balls: 15, fours: 1, sixes: 0, strikeRate: 80.0, status: "run out" },
      ],
      bowlers: [
        { name: "Dushmantha Chameera", overs: 8.0, maidens: 0, runs: 45, wickets: 1, economy: 5.63 },
        { name: "Wanindu Hasaranga", overs: 7.2, maidens: 0, runs: 40, wickets: 1, economy: 5.45 },
        { name: "Maheesh Theekshana", overs: 10.0, maidens: 1, runs: 48, wickets: 0, economy: 4.80 },
        { name: "Dasun Shanaka", overs: 6.0, maidens: 0, runs: 38, wickets: 0, economy: 6.33 },
        { name: "Chamika Karunaratne", overs: 4.0, maidens: 0, runs: 35, wickets: 0, economy: 8.75 },
      ],
      isLive: true,
    },
    {
      team: "Sri Lanka",
      score: "145/3",
      overs: "22.0",
      batsmen: [
        { name: "Pathum Nissanka", runs: 72, balls: 65, fours: 8, sixes: 2, strikeRate: 110.8, status: "not out", isSelected: true },
        { name: "Kusal Mendis", runs: 34, balls: 40, fours: 3, sixes: 0, strikeRate: 85.0, status: "not out" },
        { name: "Dimuth Karunaratne", runs: 18, balls: 24, fours: 2, sixes: 0, strikeRate: 75.0, status: "b Shaheen" },
        { name: "Charith Asalanka", runs: 15, balls: 20, fours: 1, sixes: 0, strikeRate: 75.0, status: "c Rizwan b Haris" },
        { name: "Dhananjaya de Silva", runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0.0, status: "to bat" },
      ],
      bowlers: [
        { name: "Shaheen Shah Afridi", overs: 6.0, maidens: 0, runs: 38, wickets: 1, economy: 6.33 },
        { name: "Haris Rauf", overs: 5.0, maidens: 0, runs: 35, wickets: 1, economy: 7.00 },
        { name: "Mohammad Wasim", overs: 4.0, maidens: 0, runs: 28, wickets: 0, economy: 7.00 },
        { name: "Hasan Ali", overs: 4.0, maidens: 0, runs: 22, wickets: 0, economy: 5.50 },
        { name: "Shadab Khan", overs: 3.0, maidens: 0, runs: 18, wickets: 0, economy: 6.00 },
      ],
      isLive: true,
    },
  ],
  matchInfo: {
    team1: "Pakistan",
    team2: "Sri Lanka",
    venue: "Gaddafi Stadium, Lahore",
    status: "Live",
    toss: "Pakistan won the toss and elected to bat",
    lastUpdate: "22 Apr 2025, 12:45 PM",
  },
};

// Mock data for completed match summary
const completedMatchSummaryData = {
  teams: {
    team1: "Bangladesh",
    team2: "Zimbabwe",
  },
  result: "Bangladesh won by 38 runs",
  motm: "Shakib Al Hasan (Bangladesh)",
  scores: [
    {
      team: "Bangladesh",
      score: "278/7",
      overs: "50.0",
      topBatsman: {
        name: "Mushfiqur Rahim",
        runs: 85,
        balls: 92,
      },
      topBowler: {
        name: "Shakib Al Hasan",
        wickets: 3,
        runs: 42,
      },
    },
    {
      team: "Zimbabwe",
      score: "240/10",
      overs: "47.3",
      topBatsman: {
        name: "Sean Williams",
        runs: 64,
        balls: 75,
      },
      topBowler: {
        name: "Blessing Muzarabani",
        wickets: 3,
        runs: 56,
      },
    },
  ],
  venue: "Shere Bangla Stadium, Dhaka",
  date: "2025-04-20T09:00:00",
};

// Mock data for player performance
const playerPerformanceData = [
  {
    id: "p1",
    name: "Babar Azam",
    team: "Pakistan",
    runs: 78,
    balls: 80,
    fours: 7,
    sixes: 1,
    points: 94,
  },
  {
    id: "p7",
    name: "Pathum Nissanka",
    team: "Sri Lanka",
    runs: 72,
    balls: 65,
    fours: 8,
    sixes: 2,
    points: 88,
  },
];

const MatchDetail = () => {
  const { matchId } = useParams();
  const [matchStatus, setMatchStatus] = useState<"live" | "completed">("live");
  
  useEffect(() => {
    // In a real app, fetch match details based on matchId
    // For demo, using mock data
    if (matchId === "5" || matchId === "6") {
      setMatchStatus("completed");
    } else {
      setMatchStatus("live");
    }
  }, [matchId]);

  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Match Details</h1>
        
        {matchStatus === "live" ? (
          <div className="space-y-6">
            <LiveScorecard 
              innings={liveScorecardData.innings} 
              matchInfo={liveScorecardData.matchInfo} 
            />
            
            <YourPerformance players={playerPerformanceData} />
            
            <div className="flex justify-center">
              <Button className="bg-cricket-dark-green">
                Refresh Scorecard
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <MatchSummary {...completedMatchSummaryData} />
            
            <YourPerformance players={playerPerformanceData} />
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default MatchDetail;


import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

interface PlayerSelection {
  id: string;
  userName: string;
  userPhotoUrl?: string;
  player1: {
    name: string;
    team: string;
    score: number;
  };
  player2: {
    name: string;
    team: string;
    score: number;
  };
  totalScore: number;
}

// Mock data for player selections
const playerSelections: PlayerSelection[] = [
  {
    id: "1",
    userName: "Rahul Kumar",
    player1: {
      name: "Virat Kohli",
      team: "RCB",
      score: 324,
    },
    player2: {
      name: "Jos Buttler",
      team: "RR",
      score: 254,
    },
    totalScore: 578,
  },
  {
    id: "2",
    userName: "Ankit Sharma",
    player1: {
      name: "Rohit Sharma",
      team: "MI",
      score: 286,
    },
    player2: {
      name: "David Warner",
      team: "DC",
      score: 276,
    },
    totalScore: 562,
  },
  {
    id: "3",
    userName: "Priya Patel",
    player1: {
      name: "KL Rahul",
      team: "LSG",
      score: 298,
    },
    player2: {
      name: "Shubman Gill",
      team: "GT",
      score: 237,
    },
    totalScore: 535,
  },
];

export function PlayerSelectionsList() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Player Selections</h3>
            <p className="text-sm text-gray-500">IPL 2025 Tournament</p>
          </div>
          <Trophy className="h-5 w-5 text-yellow-500" />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-14">Rank</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Selected Players</TableHead>
              <TableHead className="text-right">Total Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {playerSelections.map((selection, index) => (
              <TableRow key={selection.id}>
                <TableCell className="font-medium">#{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <img
                        src={selection.userPhotoUrl || "/assets/logo.svg"}
                        alt={selection.userName}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/assets/logo.svg";
                        }}
                      />
                    </Avatar>
                    <span>{selection.userName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{selection.player1.team}</Badge>
                      <span className="text-sm">{selection.player1.name}</span>
                      <span className="text-sm text-gray-500">({selection.player1.score} pts)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{selection.player2.team}</Badge>
                      <span className="text-sm">{selection.player2.name}</span>
                      <span className="text-sm text-gray-500">({selection.player2.score} pts)</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {selection.totalScore}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

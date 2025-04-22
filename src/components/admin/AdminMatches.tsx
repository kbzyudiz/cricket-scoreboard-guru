
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Match {
  id: string;
  team1: string;
  team2: string;
  venue: string;
  date: string;
  status: "upcoming" | "live" | "completed";
  score1?: string;
  score2?: string;
}

// Mock data for matches
const matches: Match[] = [
  {
    id: "4",
    team1: "Pakistan",
    team2: "Sri Lanka",
    venue: "Gaddafi Stadium, Lahore",
    date: "2025-04-22T10:00:00",
    status: "live",
    score1: "212/4 (35.2)",
    score2: "145/3 (22.0)",
  },
  {
    id: "1",
    team1: "India",
    team2: "Australia",
    venue: "MCG, Melbourne",
    date: "2025-05-02T09:30:00",
    status: "upcoming",
  },
  {
    id: "2",
    team1: "England",
    team2: "South Africa",
    venue: "Lords, London",
    date: "2025-05-03T10:00:00",
    status: "upcoming",
  },
  {
    id: "5",
    team1: "Bangladesh",
    team2: "Zimbabwe",
    venue: "Shere Bangla Stadium, Dhaka",
    date: "2025-04-20T09:00:00",
    status: "completed",
    score1: "278/7 (50)",
    score2: "240/10 (47.3)",
  },
];

export function AdminMatches() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Manage Matches</h2>
        <Button>Add New Match</Button>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Teams</TableHead>
              <TableHead>Date & Venue</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Score</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matches.map((match) => (
              <TableRow key={match.id}>
                <TableCell>
                  <div className="font-medium">
                    {match.team1} vs {match.team2}
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    {new Date(match.date).toLocaleString("en-US", {
                      day: "numeric",
                      month: "short",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="text-sm text-gray-500">{match.venue}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={
                    match.status === "live" ? "destructive" : 
                    match.status === "upcoming" ? "outline" : 
                    "secondary"
                  }>
                    {match.status === "live" ? "LIVE" : 
                     match.status === "upcoming" ? "Upcoming" : 
                     "Completed"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {match.score1 && match.score2 ? (
                    <div>
                      <div>{match.score1}</div>
                      <div>{match.score2}</div>
                    </div>
                  ) : (
                    <span className="text-gray-500">Not started</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex space-x-2 justify-end">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedMatch(match)}
                        >
                          Update Score
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Update Match Score</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          {selectedMatch && (
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-sm font-medium mb-2">{selectedMatch.team1}</h3>
                                <input 
                                  type="text" 
                                  className="w-full p-2 border rounded-md" 
                                  placeholder="e.g. 212/4 (35.2)"
                                  defaultValue={selectedMatch.score1 || ""}
                                />
                              </div>
                              <div>
                                <h3 className="text-sm font-medium mb-2">{selectedMatch.team2}</h3>
                                <input 
                                  type="text" 
                                  className="w-full p-2 border rounded-md" 
                                  placeholder="e.g. 145/3 (22.0)"
                                  defaultValue={selectedMatch.score2 || ""}
                                />
                              </div>
                              <div className="pt-2">
                                <Button className="w-full">Save Changes</Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}


import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  photoUrl?: string;
  points: number;
  matchesPlayed: number;
  isCurrentUser?: boolean;
}

export function LeaderboardTable({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-14 text-center">Rank</TableHead>
            <TableHead>User</TableHead>
            <TableHead className="text-right">Points</TableHead>
            <TableHead className="text-right">Matches</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow 
              key={entry.userId}
              className={`
                ${entry.isCurrentUser ? "bg-primary/5 border-l-4 border-l-primary" : ""}
                ${entry.rank <= 3 ? "font-medium" : ""}
              `}
            >
              <TableCell className="text-center">
                {entry.rank <= 3 ? (
                  <span className={`
                    inline-flex items-center justify-center w-8 h-8 rounded-full
                    ${entry.rank === 1 ? "bg-yellow-100 text-yellow-800" : 
                      entry.rank === 2 ? "bg-gray-100 text-gray-800" : 
                      "bg-amber-100 text-amber-800"}
                  `}>
                    {entry.rank}
                  </span>
                ) : (
                  entry.rank
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <img
                      src={entry.photoUrl || "/assets/logo.svg"}
                      alt={entry.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/assets/logo.svg";
                      }}
                    />
                  </Avatar>
                  <span className={entry.isCurrentUser ? "font-semibold" : ""}>
                    {entry.name}
                    {entry.isCurrentUser && (
                      <Badge variant="outline" className="ml-2 text-xs">You</Badge>
                    )}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right font-mono font-semibold">
                {entry.points}
              </TableCell>
              <TableCell className="text-right font-mono">
                {entry.matchesPlayed}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface MatchProps {
  id: string;
  team1: string;
  team2: string;
  team1Logo?: string;
  team2Logo?: string;
  venue: string;
  date: string;
  status: "upcoming" | "live" | "completed";
  score1?: string;
  score2?: string;
}

export function MatchCard({ 
  id, team1, team2, team1Logo, team2Logo, venue, date, status, score1, score2 
}: MatchProps) {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  });
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <Badge variant={
            status === "live" ? "destructive" : 
            status === "upcoming" ? "outline" : 
            "secondary"
          }>
            {status === "live" ? "LIVE" : 
             status === "upcoming" ? "Upcoming" : 
             "Completed"}
          </Badge>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center w-2/5">
            <div className="bg-gray-100 rounded-full p-2 mb-2">
              <img 
                src={team1Logo || `/assets/teams/${team1.toLowerCase().replace(/\s+/g, '-')}.png`} 
                alt={`${team1} logo`}
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/logo.svg";
                }}
              />
            </div>
            <h3 className="font-semibold text-center">{team1}</h3>
            {score1 && (
              <p className={`cricket-score ${status === "live" ? "animate-pulse-score text-cricket-ball" : ""}`}>
                {score1}
              </p>
            )}
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold mb-1">vs</span>
            <span className="text-xs text-gray-500">{venue}</span>
          </div>
          
          <div className="flex flex-col items-center w-2/5">
            <div className="bg-gray-100 rounded-full p-2 mb-2">
              <img 
                src={team2Logo || `/assets/teams/${team2.toLowerCase().replace(/\s+/g, '-')}.png`} 
                alt={`${team2} logo`}
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/logo.svg";
                }}
              />
            </div>
            <h3 className="font-semibold text-center">{team2}</h3>
            {score2 && (
              <p className={`cricket-score ${status === "live" ? "animate-pulse-score text-cricket-ball" : ""}`}>
                {score2}
              </p>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        {status === "upcoming" && (
          <Link to={`/teams/select/${id}`} className="w-full">
            <Button className="w-full">Select Players</Button>
          </Link>
        )}
        
        {status === "live" && (
          <Link to={`/matches/${id}`} className="w-full">
            <Button className="w-full" variant="default">Watch Live</Button>
          </Link>
        )}
        
        {status === "completed" && (
          <Link to={`/matches/${id}`} className="w-full">
            <Button className="w-full" variant="outline">View Summary</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

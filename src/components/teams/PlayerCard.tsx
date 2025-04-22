
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export interface PlayerProps {
  id: string;
  name: string;
  team: string;
  battingAvg: number;
  strikeRate: number;
  recentForm: string[];
  photoUrl?: string;
  selected?: boolean;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

export function PlayerCard({
  id,
  name,
  team,
  battingAvg,
  strikeRate,
  recentForm,
  photoUrl,
  selected = false,
  onSelect,
  disabled = false,
}: PlayerProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = () => {
    if (!disabled) {
      onSelect(id);
    }
  };

  return (
    <Card
      className={`relative overflow-hidden transition-all ${
        selected
          ? "border-2 border-primary bg-primary/5"
          : "hover:shadow-md"
      } ${disabled && !selected ? "opacity-60" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {selected && (
        <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
          <Check className="h-4 w-4" />
        </div>
      )}
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center overflow-hidden">
            <img
              src={photoUrl || "/assets/logo.svg"}
              alt={name}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/assets/logo.svg";
              }}
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{team}</p>
            <div className="flex space-x-2 mt-1">
              <Badge variant="outline" className="text-xs">
                Avg: {battingAvg}
              </Badge>
              <Badge variant="outline" className="text-xs">
                SR: {strikeRate}
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium mb-1">Recent Form</p>
          <div className="flex space-x-1">
            {recentForm.map((score, index) => (
              <span
                key={index}
                className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                  parseInt(score) > 50
                    ? "bg-green-100 text-green-800"
                    : parseInt(score) > 30
                    ? "bg-blue-100 text-blue-800"
                    : parseInt(score) === 0
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {score}
              </span>
            ))}
          </div>
        </div>

        <Button
          className="w-full mt-4"
          variant={selected ? "default" : "outline"}
          onClick={handleSelect}
          disabled={disabled && !selected}
        >
          {selected ? "Selected" : "Select Player"}
        </Button>
      </CardContent>
    </Card>
  );
}

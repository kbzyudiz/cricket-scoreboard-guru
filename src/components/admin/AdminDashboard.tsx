
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ArrowUpRight, Users, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockData = [
  {
    name: "Jan",
    matches: 4,
    users: 24,
  },
  {
    name: "Feb",
    matches: 3,
    users: 13,
  },
  {
    name: "Mar",
    matches: 5,
    users: 26,
  },
  {
    name: "Apr",
    matches: 7,
    users: 34,
  },
  {
    name: "May",
    matches: 4,
    users: 29,
  },
  {
    name: "Jun",
    matches: 9,
    users: 42,
  },
];

export function AdminDashboard() {
  const [statsPeriod, setStatsPeriod] = useState("month");
  const [chartView, setChartView] = useState("matches");
  
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">
              +18% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Matches</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 matches upcoming today
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Predictions Made</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,242</div>
            <p className="text-xs text-muted-foreground">
              +42% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Score</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">46.2</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Overview</CardTitle>
            <div className="space-x-2">
              <Button 
                variant={statsPeriod === "month" ? "default" : "outline"}
                size="sm" 
                onClick={() => setStatsPeriod("month")}
              >
                Month
              </Button>
              <Button 
                variant={statsPeriod === "year" ? "default" : "outline"}
                size="sm" 
                onClick={() => setStatsPeriod("year")}
              >
                Year
              </Button>
            </div>
          </div>
          <CardDescription>
            Platform activity overview
          </CardDescription>
        </CardHeader>
        <CardContent className="h-96">
          <div className="flex items-center justify-end space-x-2 pb-4">
            <Button 
              variant={chartView === "matches" ? "default" : "outline"}
              size="sm" 
              onClick={() => setChartView("matches")}
            >
              Matches
            </Button>
            <Button 
              variant={chartView === "users" ? "default" : "outline"}
              size="sm" 
              onClick={() => setChartView("users")}
            >
              Users
            </Button>
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {chartView === "matches" ? (
                <Bar dataKey="matches" fill="#6366f1" name="Matches" />
              ) : (
                <Bar dataKey="users" fill="#22c55e" name="New Users" />
              )}
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}


import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminMatches } from "./AdminMatches";
import { AdminUsers } from "./AdminUsers";

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <h3 className="font-medium">Active Users</h3>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">243</p>
            <p className="text-sm text-gray-500">+12% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <h3 className="font-medium">Live Matches</h3>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1</p>
            <p className="text-sm text-gray-500">2 more scheduled today</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <h3 className="font-medium">Total Selections</h3>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">538</p>
            <p className="text-sm text-gray-500">For current matches</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="matches">
        <TabsList>
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="matches" className="pt-4">
          <AdminMatches />
        </TabsContent>
        
        <TabsContent value="users" className="pt-4">
          <AdminUsers />
        </TabsContent>
        
        <TabsContent value="settings" className="pt-4">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">System Settings</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">API Configuration</h4>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">CricAPI Integration</p>
                    <p className="text-sm text-gray-500">Connect to live score API</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Scoring Rules</h4>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <p>Points per run</p>
                    <p className="font-mono">1</p>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <p>Bonus for fifty</p>
                    <p className="font-mono">20</p>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <p>Bonus for century</p>
                    <p className="font-mono">50</p>
                  </div>
                </div>
                <Button className="w-full mt-2">Edit Scoring Rules</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}


import { AppLayout } from "@/components/layout/AppLayout";
import { LiveMatches } from "@/components/dashboard/LiveMatches";
import { UpcomingMatches } from "@/components/dashboard/UpcomingMatches";
import { RecentMatches } from "@/components/dashboard/RecentMatches";
import { YourTeams } from "@/components/dashboard/YourTeams";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <LiveMatches />
        <YourTeams />
        <UpcomingMatches />
        <RecentMatches />
      </div>
    </AppLayout>
  );
};

export default Dashboard;

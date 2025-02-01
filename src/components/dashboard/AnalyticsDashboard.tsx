import { ChartLine, Users, MousePointerClick, Globe } from "lucide-react";
import { StatCard } from "./StatCard";
import { PageViewsChart } from "./PageViewsChart";
import { TopPagesTable } from "./TopPagesTable";

export const AnalyticsDashboard = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total Visitors"
          value="12,345"
          icon={<Users className="h-4 w-4 text-analytics-primary" />}
          description="+12% from last month"
        />
        <StatCard
          title="Page Views"
          value="48,768"
          icon={<ChartLine className="h-4 w-4 text-analytics-primary" />}
          description="+8% from last month"
        />
        <StatCard
          title="Click Rate"
          value="3.2%"
          icon={<MousePointerClick className="h-4 w-4 text-analytics-primary" />}
          description="+1.2% from last month"
        />
        <StatCard
          title="Active Users"
          value="1,234"
          icon={<Globe className="h-4 w-4 text-analytics-primary" />}
          description="Currently online"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-8">
        <PageViewsChart />
        <TopPagesTable />
      </div>
    </div>
  );
};
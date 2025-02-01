import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Mon", views: 400 },
  { date: "Tue", views: 300 },
  { date: "Wed", views: 500 },
  { date: "Thu", views: 450 },
  { date: "Fri", views: 600 },
  { date: "Sat", views: 400 },
  { date: "Sun", views: 300 },
];

export const PageViewsChart = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Page Views</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#3B82F6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
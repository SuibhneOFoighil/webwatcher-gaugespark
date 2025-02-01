import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { page: "/", views: 1234, uniqueVisitors: 890 },
  { page: "/about", views: 843, uniqueVisitors: 654 },
  { page: "/contact", views: 432, uniqueVisitors: 321 },
  { page: "/blog", views: 321, uniqueVisitors: 234 },
];

export const TopPagesTable = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Top Pages</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Unique Visitors</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.page}>
                <TableCell className="font-medium">{row.page}</TableCell>
                <TableCell className="text-right">{row.views}</TableCell>
                <TableCell className="text-right">{row.uniqueVisitors}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
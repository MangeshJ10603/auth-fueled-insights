import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, UserCheck, Clock, BarChart2 } from "lucide-react";
import { Post } from "@/types/post";

interface StatsCardsProps {
  posts: Post[];
}

export function StatsCards({ posts }: StatsCardsProps) {
  const totalPosts = posts.length;
  const averageTitleLength = Math.round(
    posts.reduce((sum, post) => sum + post.title.length, 0) / (totalPosts || 1)
  );
  const averageBodyLength = Math.round(
    posts.reduce((sum, post) => sum + post.body.length, 0) / (totalPosts || 1)
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="glassmorphism animate-fade-in border">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalPosts}</div>
          <p className="text-xs text-muted-foreground">
            Posts available in the database
          </p>
        </CardContent>
      </Card>

      <Card className="glassmorphism animate-fade-in border">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Unique Users</CardTitle>
          <UserCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {new Set(posts.map((post) => post.userId)).size}
          </div>
          <p className="text-xs text-muted-foreground">
            Users who have created posts
          </p>
        </CardContent>
      </Card>

      <Card className="glassmorphism animate-fade-in border">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Avg. Title Length
          </CardTitle>
          <BarChart2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageTitleLength}</div>
          <p className="text-xs text-muted-foreground">
            Characters per title on average
          </p>
        </CardContent>
      </Card>

      <Card className="glassmorphism animate-fade-in border">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Avg. Body Length
          </CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageBodyLength}</div>
          <p className="text-xs text-muted-foreground">
            Characters per post body on average
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PostTable } from "@/components/posts/post-table";
import { StatsCards } from "@/components/posts/stats-cards";
import { Post } from "@/types/post";
import { toast } from "sonner";
import { PageTransition } from "@/components/ui/page-transition";

export default function DashboardPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data);
        toast.success("Posts loaded successfully");
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err : new Error("Failed to fetch posts"));
        toast.error("Failed to load posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
          </div>
          
          <StatsCards posts={posts} />
          
          <div className="mt-2">
            <PostTable 
              posts={posts} 
              isLoading={isLoading} 
              error={error} 
            />
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

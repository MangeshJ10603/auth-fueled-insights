import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Post } from "@/types/post";

interface PostTableProps {
  posts: Post[];
  isLoading: boolean;
  error: Error | null;
}

export function PostTable({ posts, isLoading, error }: PostTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.id.toString().includes(searchTerm)
  );

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  if (error) {
    return (
      <div className="rounded-lg border bg-card text-card-foreground animate-fade-in p-6 text-center">
        <p className="text-destructive">Error loading posts: {error.message}</p>
        <Button variant="outline" className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground animate-fade-in">
      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">Posts</h3>
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title or ID..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="w-full pl-9 rounded-lg"
          />
        </div>
      </div>

      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
            <LoadingSpinner size="lg" />
          </div>
        )}

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Body</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <TableRow
                    key={post.id}
                    className="transition-colors hover:bg-muted/50"
                  >
                    <TableCell className="w-20 font-medium">
                      {post.id}
                    </TableCell>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell className="truncate max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">
                      {post.body}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-6">
                    {searchTerm
                      ? "No posts match your search"
                      : "No posts found"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredPosts.length > 0 && (
          <div className="flex items-center justify-between px-4 py-4 border-t">
            <div className="text-sm text-muted-foreground">
              Showing {indexOfFirstPost + 1} to{" "}
              {Math.min(indexOfLastPost, filteredPosts.length)} of{" "}
              {filteredPosts.length} posts
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-sm font-medium">
                Page {currentPage} of {totalPages || 1}
              </div>
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => goToPage(currentPage + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

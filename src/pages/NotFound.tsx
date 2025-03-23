
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/ui/page-transition";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <div className="w-full max-w-md text-center space-y-6">
          <h1 className="text-7xl font-bold tracking-tight">404</h1>
          <h2 className="text-2xl font-medium">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button 
            onClick={() => navigate("/")} 
            className="mt-4"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}

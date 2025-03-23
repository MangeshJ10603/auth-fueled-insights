
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { useAuth } from "@/context/AuthContext";
import { PageTransition } from "@/components/ui/page-transition";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
          
          <Card className="glassmorphism">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg" alt={user.name} />
                  <AvatarFallback className="text-lg">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-md font-medium mb-3">Account Information</h3>
              <Separator className="my-4" />
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Account ID
                  </dt>
                  <dd className="mt-1">{user.id}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Role
                  </dt>
                  <dd className="mt-1">Administrator</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Joined
                  </dt>
                  <dd className="mt-1">April 12, 2023</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Last Login
                  </dt>
                  <dd className="mt-1">Today</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

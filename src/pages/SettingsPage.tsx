import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PageTransition } from "@/components/ui/page-transition";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "@/context/ThemeContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Sun, Moon, BellRing, Bell, Globe, Mail } from "lucide-react";

// Import these components for the settings page
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>

          <Tabs defaultValue="appearance" className="w-full">
            <TabsList className="grid grid-cols-3 md:w-[400px]">
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            <TabsContent value="appearance" className="mt-4">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>
                    Customize the look and feel of the application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {theme === "dark" ? (
                          <Moon className="h-5 w-5" />
                        ) : (
                          <Sun className="h-5 w-5" />
                        )}
                        <Label htmlFor="theme-toggle">
                          {theme === "dark" ? "Dark" : "Light"} Mode
                        </Label>
                      </div>
                      <Switch
                        id="theme-toggle"
                        checked={theme === "dark"}
                        onCheckedChange={toggleTheme}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Toggle between light and dark mode
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-md font-medium">
                      Animation Preferences
                    </h3>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animations">Enable animations</Label>
                      <Switch id="animations" defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Control transition animations throughout the app
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-4">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Configure how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BellRing className="h-5 w-5" />
                        <Label htmlFor="push-notifications">
                          Push Notifications
                        </Label>
                      </div>
                      <Switch id="push-notifications" defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications even when you're not using the app
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5" />
                        <Label htmlFor="email-notifications">
                          Email Notifications
                        </Label>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receive important updates via email
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="mt-4">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Manage your account settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-5 w-5" />
                        <Label htmlFor="language">Language</Label>
                      </div>
                      <Select value="english" onValueChange={() => {}}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Change your preferred language
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Bell className="h-5 w-5" />
                        <Label htmlFor="active-sessions">Active Sessions</Label>
                      </div>
                      <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium">
                        1 Active
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Manage your active login sessions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

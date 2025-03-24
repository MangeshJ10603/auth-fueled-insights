import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  className?: string;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar({ isOpen, toggleSidebar, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex flex-col border-r bg-sidebar transition-all duration-300 ease-spring",
        isOpen ? "w-64" : "w-0 md:w-20",
        "md:relative",
        className
      )}
    >
      <div className="relative flex h-16 items-center justify-between border-b px-4">
        <h2
          className={cn(
            "text-lg font-semibold tracking-tight transition-opacity",
            isOpen ? "opacity-100 delay-150" : "opacity-0 md:absolute"
          )}
        >
          Dashboard
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 hidden md:flex"
          onClick={toggleSidebar}
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-sidebar-accent",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground",
                  !isOpen && "md:justify-center"
                )
              }
            >
              <item.icon
                className={cn(
                  "h-5 w-5 flex-shrink-0",
                  !isOpen && "md:h-6 md:w-6"
                )}
              />
              <span
                className={cn(
                  "flex-1 text-sm transition-opacity",
                  isOpen ? "opacity-100 delay-150" : "opacity-0 md:hidden"
                )}
              >
                {item.title}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}

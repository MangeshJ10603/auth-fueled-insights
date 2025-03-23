
import { useState, useEffect, ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Close sidebar by default on mobile
  useEffect(() => {
    if (!isDesktop) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isDesktop]);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen w-full flex-col md:flex-row overflow-hidden">
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      
      {/* Overlay for mobile */}
      {!isDesktop && isSidebarOpen && (
        <div 
          className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={isSidebarOpen} 
        />
        <main className={cn(
          "flex-1 overflow-auto p-4 md:p-6 transition-all duration-300",
          isSidebarOpen ? "md:ml-0" : "md:ml-0"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}

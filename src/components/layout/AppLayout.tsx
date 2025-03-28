
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Trophy, Star, Wallet, User, QrCode } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Leaderboard", icon: Trophy, path: "/leaderboard" },
  { label: "Favorites", icon: Star, path: "/favorites" },
  { label: "Wallet", icon: Wallet, path: "/wallet" },
  { label: "Profile", icon: User, path: "/profile" },
];

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 mb-16 pb-4">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg pb-safe z-50">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-2 px-4 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon size={20} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Quick Tip Button */}
      <div className="fixed bottom-16 right-4 md:right-8 z-50">
        <Link 
          to="/quick-tip" 
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-tipme-purple-dark transition-all duration-300 transform hover:scale-105"
        >
          <QrCode size={24} />
        </Link>
      </div>
    </div>
  );
};

export default AppLayout;

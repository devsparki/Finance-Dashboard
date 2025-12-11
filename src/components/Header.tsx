import { Bell, Settings } from "lucide-react";

interface HeaderProps {
  userName: string;
  avatarUrl?: string;
}

export const Header = ({ userName, avatarUrl }: HeaderProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="flex items-center justify-between py-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="relative">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={userName}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
            />
          ) : (
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center ring-2 ring-primary/30">
              <span className="text-sm font-bold text-primary-foreground">
                {getInitials(userName)}
              </span>
            </div>
          )}
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-primary rounded-full border-2 border-background" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{getGreeting()},</p>
          <h1 className="text-lg font-semibold text-foreground">{userName}</h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative p-2.5 rounded-xl glass-card hover:bg-muted/50 transition-colors">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-expense rounded-full" />
        </button>
        <button className="p-2.5 rounded-xl glass-card hover:bg-muted/50 transition-colors">
          <Settings className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </header>
  );
};

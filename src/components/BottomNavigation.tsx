import { Home, CreditCard, PieChart, Bell, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Início", path: "/" },
  { icon: CreditCard, label: "Cartões", path: "/cartoes" },
  { icon: PieChart, label: "Análise", path: "/analise" },
  { icon: Bell, label: "Alertas", path: "/alertas" },
  { icon: User, label: "Perfil", path: "/perfil" },
];

export const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="glass-card border-t border-border/50 px-4 py-2 pb-6">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`relative flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-pulse-glow" />
                )}
                <item.icon className={`h-5 w-5 transition-transform ${
                  isActive ? "scale-110" : ""
                }`} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

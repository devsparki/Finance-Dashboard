import { Home, CreditCard, PieChart, Bell, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Início" },
  { icon: CreditCard, label: "Cartões" },
  { icon: PieChart, label: "Análise" },
  { icon: Bell, label: "Alertas" },
  { icon: User, label: "Perfil" },
];

export const BottomNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="glass-card border-t border-border/50 px-4 py-2 pb-6">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => setActiveIndex(index)}
              className={`relative flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
                activeIndex === index
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeIndex === index && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-pulse-glow" />
              )}
              <item.icon className={`h-5 w-5 transition-transform ${
                activeIndex === index ? "scale-110" : ""
              }`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

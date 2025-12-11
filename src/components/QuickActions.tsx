import { ArrowUpRight, ArrowDownLeft, QrCode, Receipt } from "lucide-react";

const actions = [
  { icon: ArrowUpRight, label: "Enviar", color: "bg-primary/20 text-primary" },
  { icon: ArrowDownLeft, label: "Receber", color: "bg-accent/20 text-accent" },
  { icon: QrCode, label: "Pix", color: "bg-secondary text-foreground" },
  { icon: Receipt, label: "Pagar", color: "bg-expense/20 text-expense" },
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-4 gap-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
      {actions.map((action, index) => (
        <button
          key={action.label}
          className="flex flex-col items-center gap-2 p-4 rounded-xl glass-card hover:bg-muted/50 transition-all duration-300 active:scale-95"
          style={{ animationDelay: `${0.1 + index * 0.05}s` }}
        >
          <div className={`p-3 rounded-full ${action.color} transition-transform hover:scale-110`}>
            <action.icon className="h-5 w-5" />
          </div>
          <span className="text-xs font-medium text-foreground">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

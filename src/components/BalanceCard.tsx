import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";

interface BalanceCardProps {
  balance: number;
  percentChange: number;
}

export const BalanceCard = ({ balance, percentChange }: BalanceCardProps) => {
  const [showBalance, setShowBalance] = useState(true);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl gradient-primary p-6 shadow-glow animate-fade-up">
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-foreground/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-foreground/5 blur-xl" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary-foreground/80">Saldo disponível</span>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
          >
            {showBalance ? (
              <Eye className="h-4 w-4 text-primary-foreground" />
            ) : (
              <EyeOff className="h-4 w-4 text-primary-foreground" />
            )}
          </button>
        </div>
        
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">
          {showBalance ? formatCurrency(balance) : "R$ ••••••"}
        </h2>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-foreground/10">
            <TrendingUp className="h-3 w-3 text-primary-foreground" />
            <span className="text-xs font-medium text-primary-foreground">
              +{percentChange}% este mês
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

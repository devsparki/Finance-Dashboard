import { Header } from "@/components/Header";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CreditCard, Plus, Lock, Eye, EyeOff, Copy } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    id: 1,
    name: "Cartão Principal",
    number: "4532 •••• •••• 8547",
    fullNumber: "4532 1234 5678 8547",
    expiry: "12/28",
    limit: 15000,
    used: 4250.90,
    brand: "Visa",
    color: "gradient-primary",
  },
  {
    id: 2,
    name: "Cartão Virtual",
    number: "5412 •••• •••• 3421",
    fullNumber: "5412 9876 5432 3421",
    expiry: "08/26",
    limit: 5000,
    used: 1200.00,
    brand: "Mastercard",
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
  },
];

const Cards = () => {
  const [showNumber, setShowNumber] = useState<number | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const getUsagePercent = (used: number, limit: number) => {
    return Math.round((used / limit) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-4 pb-28">
        <Header userName="Lucas Silva" />

        <div className="space-y-6">
          <div className="flex items-center justify-between animate-fade-up">
            <h2 className="text-xl font-bold text-foreground">Meus Cartões</h2>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              <Plus className="h-4 w-4" />
              Novo
            </button>
          </div>

          <div className="space-y-4">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Visual */}
                <div className={`relative overflow-hidden rounded-2xl ${card.color} p-6 shadow-glow mb-4`}>
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-foreground/10 blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-foreground/5 blur-xl" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary-foreground/80">{card.name}</span>
                      <span className="text-sm font-bold text-primary-foreground">{card.brand}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CreditCard className="h-8 w-8 text-primary-foreground/80" />
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-mono text-primary-foreground">
                          {showNumber === card.id ? card.fullNumber : card.number}
                        </span>
                        <button
                          onClick={() => setShowNumber(showNumber === card.id ? null : card.id)}
                          className="p-1.5 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors"
                        >
                          {showNumber === card.id ? (
                            <EyeOff className="h-4 w-4 text-primary-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-primary-foreground" />
                          )}
                        </button>
                        <button className="p-1.5 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors">
                          <Copy className="h-4 w-4 text-primary-foreground" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-primary-foreground/60">Validade</span>
                        <p className="text-sm font-medium text-primary-foreground">{card.expiry}</p>
                      </div>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors">
                        <Lock className="h-3.5 w-3.5 text-primary-foreground" />
                        <span className="text-xs font-medium text-primary-foreground">Bloquear</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Usage */}
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Limite utilizado</span>
                    <span className="text-sm font-semibold text-foreground">
                      {getUsagePercent(card.used, card.limit)}%
                    </span>
                  </div>
                  
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${getUsagePercent(card.used, card.limit)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{formatCurrency(card.used)}</span>
                    <span className="text-muted-foreground">de {formatCurrency(card.limit)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Cards;

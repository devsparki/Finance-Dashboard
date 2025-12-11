import { ShoppingBag, Coffee, Car, Smartphone, Building2, Utensils } from "lucide-react";

const transactions = [
  {
    id: 1,
    icon: ShoppingBag,
    title: "Amazon",
    category: "Compras",
    amount: -299.90,
    date: "Hoje, 14:32",
    color: "bg-expense/20 text-expense",
  },
  {
    id: 2,
    icon: Building2,
    title: "Salário",
    category: "Receita",
    amount: 8500.00,
    date: "Hoje, 09:00",
    color: "bg-primary/20 text-primary",
  },
  {
    id: 3,
    icon: Coffee,
    title: "Starbucks",
    category: "Alimentação",
    amount: -32.50,
    date: "Ontem, 18:45",
    color: "bg-expense/20 text-expense",
  },
  {
    id: 4,
    icon: Car,
    title: "Uber",
    category: "Transporte",
    amount: -45.00,
    date: "Ontem, 12:20",
    color: "bg-expense/20 text-expense",
  },
  {
    id: 5,
    icon: Smartphone,
    title: "Netflix",
    category: "Assinaturas",
    amount: -55.90,
    date: "12 Jun, 00:00",
    color: "bg-expense/20 text-expense",
  },
  {
    id: 6,
    icon: Utensils,
    title: "iFood",
    category: "Alimentação",
    amount: -89.90,
    date: "11 Jun, 20:15",
    color: "bg-expense/20 text-expense",
  },
];

export const TransactionList = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      signDisplay: "always",
    }).format(value);
  };

  return (
    <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-foreground">Transações</h3>
        <button className="text-xs text-primary font-medium hover:underline">
          Ver todas
        </button>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="flex items-center gap-3 p-3 rounded-xl glass-card hover:bg-muted/30 transition-all duration-300 cursor-pointer group"
            style={{ animationDelay: `${0.3 + index * 0.05}s` }}
          >
            <div className={`p-2.5 rounded-xl ${transaction.color} transition-transform group-hover:scale-110`}>
              <transaction.icon className="h-5 w-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-foreground truncate">
                {transaction.title}
              </h4>
              <p className="text-xs text-muted-foreground">{transaction.category}</p>
            </div>
            
            <div className="text-right">
              <p className={`text-sm font-semibold ${
                transaction.amount > 0 ? "text-primary" : "text-foreground"
              }`}>
                {formatCurrency(transaction.amount)}
              </p>
              <p className="text-xs text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

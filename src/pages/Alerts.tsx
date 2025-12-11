import { Header } from "@/components/Header";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Bell, CreditCard, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const alerts = [
  {
    id: 1,
    icon: CreditCard,
    title: "Compra aprovada",
    description: "Amazon - R$ 299,90",
    time: "Agora",
    type: "info",
    read: false,
  },
  {
    id: 2,
    icon: AlertTriangle,
    title: "Limite próximo",
    description: "Seu cartão principal está com 85% do limite utilizado",
    time: "2h atrás",
    type: "warning",
    read: false,
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Meta atingida!",
    description: "Você atingiu sua meta de economia mensal",
    time: "5h atrás",
    type: "success",
    read: false,
  },
  {
    id: 4,
    icon: Bell,
    title: "Fatura disponível",
    description: "Sua fatura de Junho está disponível para pagamento",
    time: "1 dia atrás",
    type: "info",
    read: true,
  },
  {
    id: 5,
    icon: CheckCircle2,
    title: "Pagamento confirmado",
    description: "Fatura de Maio paga com sucesso",
    time: "3 dias atrás",
    type: "success",
    read: true,
  },
  {
    id: 6,
    icon: Clock,
    title: "Lembrete",
    description: "Sua assinatura Netflix será renovada em 3 dias",
    time: "5 dias atrás",
    type: "info",
    read: true,
  },
];

const Alerts = () => {
  const unreadCount = alerts.filter((a) => !a.read).length;

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-expense/20 text-expense";
      case "success":
        return "bg-primary/20 text-primary";
      default:
        return "bg-secondary text-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-4 pb-28">
        <Header userName="Lucas Silva" />

        <div className="space-y-6">
          <div className="flex items-center justify-between animate-fade-up">
            <div>
              <h2 className="text-xl font-bold text-foreground">Notificações</h2>
              <p className="text-sm text-muted-foreground">
                {unreadCount > 0 ? `${unreadCount} não lidas` : "Tudo em dia!"}
              </p>
            </div>
            {unreadCount > 0 && (
              <button className="text-sm text-primary font-medium hover:underline">
                Marcar todas como lidas
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {["Todas", "Não lidas", "Importantes"].map((tab, index) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Alerts List */}
          <div className="space-y-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {alerts.map((alert, index) => (
              <div
                key={alert.id}
                className={`flex items-start gap-3 p-4 rounded-xl glass-card hover:bg-muted/30 transition-all cursor-pointer ${
                  !alert.read ? "border-l-2 border-l-primary" : ""
                }`}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className={`p-2.5 rounded-xl ${getTypeStyles(alert.type)}`}>
                  <alert.icon className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className={`text-sm font-medium ${!alert.read ? "text-foreground" : "text-muted-foreground"}`}>
                      {alert.title}
                    </h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{alert.description}</p>
                </div>

                {!alert.read && (
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse-glow" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Alerts;

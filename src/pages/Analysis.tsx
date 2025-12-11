import { Header } from "@/components/Header";
import { BottomNavigation } from "@/components/BottomNavigation";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

const categoryData = [
  { name: "Alimentação", value: 1850, color: "hsl(12, 80%, 60%)" },
  { name: "Transporte", value: 650, color: "hsl(200, 70%, 50%)" },
  { name: "Compras", value: 1200, color: "hsl(280, 70%, 55%)" },
  { name: "Assinaturas", value: 450, color: "hsl(45, 80%, 50%)" },
  { name: "Lazer", value: 380, color: "hsl(155, 80%, 45%)" },
];

const monthlyData = [
  { name: "Jan", value: 4200 },
  { name: "Fev", value: 3800 },
  { name: "Mar", value: 5100 },
  { name: "Abr", value: 4700 },
  { name: "Mai", value: 5500 },
  { name: "Jun", value: 4530 },
];

const insights = [
  {
    title: "Gastos com alimentação",
    description: "Aumentou 15% em relação ao mês passado",
    type: "warning",
    icon: TrendingUp,
  },
  {
    title: "Economia em transporte",
    description: "Você economizou R$ 200 este mês",
    type: "success",
    icon: TrendingDown,
  },
];

const Analysis = () => {
  const totalExpenses = categoryData.reduce((acc, item) => acc + item.value, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-4 pb-28">
        <Header userName="Lucas Silva" />

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-foreground animate-fade-up">Análise Financeira</h2>

          {/* Category Pie Chart */}
          <div className="glass-card rounded-2xl p-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-base font-semibold text-foreground mb-4">Gastos por Categoria</h3>
            
            <div className="flex items-center gap-4">
              <div className="h-40 w-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={70}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex-1 space-y-2">
                {categoryData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="text-xs font-medium text-foreground">
                      {Math.round((item.value / totalExpenses) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total de gastos</span>
                <span className="text-lg font-bold text-foreground">{formatCurrency(totalExpenses)}</span>
              </div>
            </div>
          </div>

          {/* Monthly Bar Chart */}
          <div className="glass-card rounded-2xl p-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-base font-semibold text-foreground mb-4">Gastos Mensais</h3>
            
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(220, 18%, 12%)",
                      border: "1px solid hsl(220, 15%, 18%)",
                      borderRadius: "12px",
                    }}
                    formatter={(value: number) => [formatCurrency(value), "Gastos"]}
                  />
                  <Bar dataKey="value" fill="hsl(155, 80%, 45%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Insights */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-base font-semibold text-foreground mb-4">Insights</h3>
            
            <div className="space-y-3">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl glass-card hover:bg-muted/30 transition-all cursor-pointer group"
                >
                  <div className={`p-2.5 rounded-xl ${
                    insight.type === "warning" ? "bg-expense/20 text-expense" : "bg-primary/20 text-primary"
                  }`}>
                    <insight.icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground">{insight.title}</h4>
                    <p className="text-xs text-muted-foreground">{insight.description}</p>
                  </div>

                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Analysis;

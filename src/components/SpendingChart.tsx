import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", receita: 4200, despesa: 2400 },
  { name: "Fev", receita: 3800, despesa: 2800 },
  { name: "Mar", receita: 5100, despesa: 3200 },
  { name: "Abr", receita: 4700, despesa: 2900 },
  { name: "Mai", receita: 5500, despesa: 3100 },
  { name: "Jun", receita: 6200, despesa: 3500 },
];

export const SpendingChart = () => {
  return (
    <div className="glass-card rounded-2xl p-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-foreground">Fluxo Financeiro</h3>
        <select className="bg-secondary text-foreground text-xs px-3 py-1.5 rounded-lg border-none outline-none">
          <option>6 meses</option>
          <option>3 meses</option>
          <option>1 ano</option>
        </select>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Receita</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-expense" />
          <span className="text-xs text-muted-foreground">Despesa</span>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(155, 80%, 45%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(155, 80%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDespesa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(12, 80%, 60%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(12, 80%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
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
                boxShadow: "0 8px 32px hsl(0 0% 0% / 0.3)",
              }}
              labelStyle={{ color: "hsl(210, 40%, 98%)" }}
              formatter={(value: number) => [
                new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value),
              ]}
            />
            <Area
              type="monotone"
              dataKey="receita"
              stroke="hsl(155, 80%, 45%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorReceita)"
            />
            <Area
              type="monotone"
              dataKey="despesa"
              stroke="hsl(12, 80%, 60%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorDespesa)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

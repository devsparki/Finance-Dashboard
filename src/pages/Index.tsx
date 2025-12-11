import { Header } from "@/components/Header";
import { BalanceCard } from "@/components/BalanceCard";
import { QuickActions } from "@/components/QuickActions";
import { SpendingChart } from "@/components/SpendingChart";
import { TransactionList } from "@/components/TransactionList";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main content area with safe area padding */}
      <main className="max-w-md mx-auto px-4 pb-28">
        <Header userName="Lucas Silva" />
        
        <div className="space-y-6">
          <BalanceCard balance={12847.32} percentChange={8.5} />
          <QuickActions />
          <SpendingChart />
          <TransactionList />
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Index;

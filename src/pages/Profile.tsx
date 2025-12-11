import { Header } from "@/components/Header";
import { BottomNavigation } from "@/components/BottomNavigation";
import { 
  User, 
  Shield, 
  Bell, 
  CreditCard, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Moon,
  Smartphone,
  FileText
} from "lucide-react";

const menuItems = [
  {
    section: "Conta",
    items: [
      { icon: User, label: "Dados pessoais", description: "Nome, email, telefone" },
      { icon: Shield, label: "Segurança", description: "Senha, biometria, 2FA" },
      { icon: CreditCard, label: "Pagamentos", description: "Métodos de pagamento" },
    ],
  },
  {
    section: "Preferências",
    items: [
      { icon: Bell, label: "Notificações", description: "Push, email, SMS" },
      { icon: Moon, label: "Aparência", description: "Tema escuro ativado" },
      { icon: Smartphone, label: "Dispositivos", description: "2 dispositivos conectados" },
    ],
  },
  {
    section: "Suporte",
    items: [
      { icon: HelpCircle, label: "Central de ajuda", description: "FAQs e tutoriais" },
      { icon: FileText, label: "Termos e políticas", description: "Termos de uso, privacidade" },
    ],
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-4 pb-28">
        <Header userName="Lucas Silva" />

        <div className="space-y-6">
          {/* Profile Card */}
          <div className="glass-card rounded-2xl p-6 animate-fade-up">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center ring-4 ring-primary/20">
                  <span className="text-2xl font-bold text-primary-foreground">LS</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary-foreground">✓</span>
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">Lucas Silva</h2>
                <p className="text-sm text-muted-foreground">lucas.silva@email.com</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    Premium
                  </span>
                  <span className="text-xs text-muted-foreground">Desde 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          {menuItems.map((section, sectionIndex) => (
            <div 
              key={section.section} 
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + sectionIndex * 0.1}s` }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
                {section.section}
              </h3>
              
              <div className="glass-card rounded-2xl overflow-hidden divide-y divide-border">
                {section.items.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-4 w-full p-4 hover:bg-muted/30 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-secondary">
                      <item.icon className="h-5 w-5 text-foreground" />
                    </div>

                    <div className="flex-1 text-left">
                      <h4 className="text-sm font-medium text-foreground">{item.label}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>

                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <button 
            className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl glass-card text-expense hover:bg-expense/10 transition-all animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Sair da conta</span>
          </button>

          <p className="text-center text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Fintech Flow v1.0.0
          </p>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Profile;

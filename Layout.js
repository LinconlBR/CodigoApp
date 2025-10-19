import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Leaf, LayoutDashboard, Plus, Target, Lightbulb, Calculator, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: LayoutDashboard,
  },
  {
    title: "Registrar Consumo",
    url: createPageUrl("AddRecord"),
    icon: Plus,
  },
  {
    title: "Minhas Metas",
    url: createPageUrl("Goals"),
    icon: Target,
  },
  {
    title: "Dicas Sustentáveis",
    url: createPageUrl("Tips"),
    icon: Lightbulb,
  },
  {
    title: "Calculadora CO₂",
    url: createPageUrl("Calculator"),
    icon: Calculator,
  },
  {
    title: "Meu Perfil",
    url: createPageUrl("Profile"),
    icon: User,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>
        {`
          :root {
            --primary-50: #f0fdf4;
            --primary-100: #dcfce7;
            --primary-500: #22c55e;
            --primary-600: #16a34a;
            --primary-700: #15803d;
            --accent-blue: #3b82f6;
            --accent-orange: #f59e0b;
          }
        `}
      </style>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <Sidebar className="border-r border-emerald-100/50 backdrop-blur-sm bg-white/80">
          <SidebarHeader className="border-b border-emerald-100/50 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">EcoLar</h2>
                <p className="text-xs text-emerald-600">Assistente Sustentável</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Navegação
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className={`hover:bg-emerald-50 transition-all duration-200 rounded-xl mb-1 ${
                            isActive ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md hover:from-emerald-600 hover:to-teal-700' : ''
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                            <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-emerald-100/50 p-4">
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-200/50">
              <p className="text-sm font-medium text-gray-900 mb-1">💚 Impacto Positivo</p>
              <p className="text-xs text-gray-600">Continue fazendo a diferença para o planeta!</p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white/60 backdrop-blur-md border-b border-emerald-100/50 px-6 py-4 md:hidden sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-emerald-50 p-2 rounded-lg transition-colors duration-200" />
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <h1 className="text-lg font-bold text-gray-900">EcoLar</h1>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
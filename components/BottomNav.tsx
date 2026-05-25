import { Home, Settings, User } from "lucide-react";

interface BottomNavProps {
  activeTab: "home" | "sound" | "profile";
  onTabChange: (tab: "home" | "sound" | "profile") => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "home" as const, icon: Home, label: "放空" },
    { id: "sound" as const, icon: Settings, label: "声音" },
    { id: "profile" as const, icon: User, label: "我的" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-2 z-50">
      <div className="max-w-md mx-auto flex justify-around items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-primary-500"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-transform duration-300 ${
                  isActive ? "scale-110" : ""
                }`}
              />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
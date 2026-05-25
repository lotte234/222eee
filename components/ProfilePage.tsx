import { useState } from "react";
import { Palette, Zap, BellOff, HelpCircle, Shield, MessageSquare, Users, Wind } from "lucide-react";
import { userProfile, preferences, guideItems, settingItems } from "../data/mockData";

export function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const iconMap: Record<string, typeof Palette> = {
    palette: Palette,
    zap: Zap,
    "bell-off": BellOff,
    shield: Shield,
    "message-square": MessageSquare,
    users: Users,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-24">
      <header className="px-6 pt-8 pb-4">
        <h1 className="text-lg font-semibold text-gray-800 text-center tracking-wider">
          个人偏好
        </h1>
      </header>

      <div className="px-4 space-y-6">
        <div className="flex flex-col items-center animate-fade-in">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center border-2 border-white">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {userProfile.name}
          </h2>
          <p className="text-sm text-gray-500">
            今天已经累计放空 {userProfile.todayMinutes} 分钟，继续保持内心的宁静。
          </p>
        </div>

        <div className="glass-card p-5 animate-slide-up">
          <h3 className="text-sm font-medium text-gray-500 mb-4 px-1">应用偏好</h3>
          <div className="space-y-4">
            {preferences.map((pref) => {
              const Icon = iconMap[pref.icon] || Palette;
              if (pref.type === "toggle") {
                return (
                  <button
                    key={pref.id}
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                    className="w-full flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                      <Icon size={20} className="text-primary-500" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-gray-800">{pref.label}</p>
                      <p className="text-xs text-gray-500">{pref.description}</p>
                    </div>
                    <button
                      onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                      className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                        notificationsEnabled ? "bg-primary-500" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                          notificationsEnabled ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </button>
                );
              }
              return (
                <button key={pref.id} className="w-full flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Icon size={20} className="text-primary-500" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-gray-800">{pref.label}</p>
                    <p className="text-xs text-gray-500">{pref.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-primary-500">{pref.currentValue}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle size={16} className="text-primary-400" />
            <h3 className="text-sm font-medium text-gray-700">放空指南</h3>
          </div>
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <HelpCircle size={20} className="text-primary-500" />
              </div>
              <span className="text-sm font-medium text-gray-800">如何更好地放空?</span>
            </div>
            <div className="space-y-4">
              {guideItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <span className="text-xs text-primary-500 font-medium w-5 flex items-center justify-center">
                    0{item.id}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-sm font-medium text-gray-500 mb-4 px-1">隐私与支持</h3>
          <div className="space-y-2">
            {settingItems.map((item) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <button key={item.id} className="w-full flex items-center gap-4 py-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                    <Icon size={20} className="text-gray-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                  {item.hasArrow && (
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center pt-8 pb-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 mb-2">
            <Wind size={20} className="text-gray-400" />
            <span className="text-gray-400 font-semibold tracking-wider">CalmFlow</span>
          </div>
          <p className="text-xs text-gray-400 mb-3">{userProfile.totalMinutes}</p>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>服务条款</span>
            <span>隐私协议</span>
          </div>
        </div>
      </div>
    </div>
  );
}
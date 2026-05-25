import { useState } from "react";
import { ArrowLeft, CloudRain, Waves, Wind, Volume2, Clock, Type, Sparkles } from "lucide-react";
import { soundEffects, timingOptions } from "../data/mockData";

interface SoundPageProps {
  onBack?: () => void;
}

export function SoundPage({ onBack }: SoundPageProps) {
  const [selectedSound, setSelectedSound] = useState("rain");
  const [mainVolume, setMainVolume] = useState(80);
  const [envVolume, setEnvVolume] = useState(45);
  const [selectedTime, setSelectedTime] = useState("10 min");
  const [healingTextEnabled, setHealingTextEnabled] = useState(true);
  const [autoFadeEnabled, setAutoFadeEnabled] = useState(true);

  const iconMap: Record<string, typeof CloudRain> = {
    "cloud-rain": CloudRain,
    waves: Waves,
    wind: Wind,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-24">
      <header className="px-6 pt-8 pb-4 flex items-center justify-between">
        {onBack && (
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white transition-colors shadow-sm"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <h1 className="text-lg font-semibold text-gray-800 tracking-wider">
          播放设置
        </h1>
        <div className="w-10" />
      </header>

      <div className="px-4 space-y-6">
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-gray-700">核心音效</h2>
            <span className="text-xs text-primary-500">当前已选</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {soundEffects.map((sound) => {
              const Icon = iconMap[sound.icon] || CloudRain;
              const isSelected = selectedSound === sound.id;
              return (
                <button
                  key={sound.id}
                  onClick={() => setSelectedSound(sound.id)}
                  className={`flex-shrink-0 w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                    isSelected
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-200"
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-xs font-medium">{sound.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="glass-card p-5 animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <Volume2 size={16} className="text-primary-400" />
            <h2 className="text-sm font-medium text-gray-700">混音调节</h2>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">主音量</span>
                <span className="text-primary-500 font-medium">{mainVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mainVolume}
                onChange={(e) => setMainVolume(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">环境伴奏</span>
                <span className="text-primary-500 font-medium">{envVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={envVolume}
                onChange={(e) => setEnvVolume(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} className="text-primary-400" />
            <h2 className="text-sm font-medium text-gray-700">定时关闭</h2>
          </div>
          <div className="flex gap-2">
            {timingOptions.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedTime === time
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 mb-4">
            <Type size={16} className="text-amber-400" />
            <h2 className="text-sm font-medium text-gray-700">治愈文字</h2>
            <button
              onClick={() => setHealingTextEnabled(!healingTextEnabled)}
              className={`ml-auto w-12 h-6 rounded-full transition-colors duration-300 ${
                healingTextEnabled ? "bg-primary-500" : "bg-gray-200"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  healingTextEnabled ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <button
            onClick={() => setAutoFadeEnabled(!autoFadeEnabled)}
            className="w-full flex items-center justify-between py-3"
          >
            <span className="text-sm text-gray-600">自动淡入淡出</span>
            <button
              onClick={() => setAutoFadeEnabled(!autoFadeEnabled)}
              className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                autoFadeEnabled ? "bg-primary-500" : "bg-gray-200"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  autoFadeEnabled ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </button>

          <button className="w-full mt-2 flex items-center justify-between py-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-amber-400" />
              <span className="text-xs text-gray-500">当前显示短语库</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-700">
                {'"愿你在这个瞬间，只属于你自己。"'}
              </p>
              <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
              <Sparkles size={24} className="text-primary-400" />
            </div>
            <p className="text-sm text-gray-500">实时预览中</p>
            <p className="text-xs text-gray-400">
              声音: 细雨 + 治愈文案
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
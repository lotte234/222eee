import { useState, useEffect } from "react";
import { CloudRain, Wind, Waves, Clock, Maximize2, Volume2 } from "lucide-react";
import { healingTexts } from "../data/mockData";

export function HomePage() {
  const [currentText, setCurrentText] = useState(healingTexts[0]);
  const [volume, setVolume] = useState(65);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentSound, setCurrentSound] = useState("细雨");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * healingTexts.length);
      setCurrentText(healingTexts[randomIndex]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying) {
      timer = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const soundOptions = [
    { id: "rain", name: "细雨", icon: CloudRain },
    { id: "wind", name: "轻风", icon: Wind },
    { id: "waves", name: "浪潮", icon: Waves },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-24">
      <header className="px-6 pt-8 pb-4">
        <h1 className="text-lg font-semibold text-gray-800 text-center tracking-wider">
          CALMFLOW
        </h1>
      </header>

      <div className="px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-6">
          <img
            src="https://neeko-copilot.bytedance.net/api/text2image?prompt=beautiful%20sunset%20over%20ocean%20calm%20waves%20peaceful%20serene%20orange%20golden%20hour&image_size=landscape_16_9"
            alt="Background"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-black/40 text-white text-xs px-3 py-1 rounded-full">
              OCEAN MIST
            </span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl md:text-2xl font-light text-center px-6 drop-shadow-lg leading-relaxed">
              {currentText}
            </p>
          </div>
        </div>

        <div className="glass-card p-6 animate-slide-up">
          <div className="flex items-center justify-center gap-8 mb-6">
            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
              <Clock size={20} />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                isPlaying
                  ? "bg-primary-500 animate-pulse-slow"
                  : "bg-primary-400 hover:bg-primary-500"
              }`}
            >
              <div className={`flex gap-1.5 ${isPlaying ? "" : "space-x-0"}`}>
                {isPlaying ? (
                  <>
                    <div className="w-2 h-8 bg-white rounded-full" />
                    <div className="w-2 h-8 bg-white rounded-full" />
                  </>
                ) : (
                  <>
                    <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent" />
                  </>
                )}
              </div>
            </button>

            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
              <Maximize2 size={20} />
            </button>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <Volume2 size={16} className="text-gray-400" />
            <span className="text-sm text-gray-500">环境音量</span>
            <span className="text-sm font-medium text-primary-500 ml-auto">{volume}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full mb-6"
          />

          <div className="flex gap-3">
            {soundOptions.map((sound) => {
              const Icon = sound.icon;
              const isActive = currentSound === sound.name;
              return (
                <button
                  key={sound.id}
                  onClick={() => setCurrentSound(sound.name)}
                  className={`flex-1 py-3 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 ${
                    isActive
                      ? "bg-primary-500 text-white shadow-md shadow-primary-200"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium">{sound.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>此刻，只属于你自己。</p>
        </div>

        {isPlaying && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="text-6xl font-light text-white/20">
              {formatTime(timeElapsed)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
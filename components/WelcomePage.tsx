import { Wind } from "lucide-react";

interface WelcomePageProps {
  onStart: () => void;
  onSkip: () => void;
}

export function WelcomePage({ onStart, onSkip }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white flex flex-col items-center justify-center px-6">
      <div className="animate-fade-in">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-primary-400 rounded-full flex items-center justify-center shadow-lg shadow-primary-200 animate-pulse-slow">
            <Wind size={36} className="text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center border-2 border-white">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          CalmFlow
        </h1>
        <p className="text-gray-500 text-sm text-center mb-8">
          极简安静休闲APP
        </p>
      </div>

      <div className="w-full max-w-sm animate-slide-up">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://neeko-copilot.bytedance.net/api/text2image?prompt=zen%20meditation%20peaceful%20stones%20stacked%20in%20water%20serene%20nature&image_size=portrait_4_3"
            alt="Meditation"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-gray-700 text-sm italic text-center">
                {'"此时此刻，让心静下来。"'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm mt-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <button
          onClick={onStart}
          className="w-full bg-primary-500 text-white py-4 rounded-full font-medium text-base shadow-lg shadow-primary-200 hover:bg-primary-600 active:scale-98 transition-all duration-300"
        >
          开始放空
        </button>
        
        <button
          onClick={onSkip}
          className="w-full mt-4 text-gray-400 text-sm hover:text-gray-600 transition-colors duration-300"
        >
          跳过进入
        </button>
      </div>

      <div className="absolute bottom-8 flex gap-2">
        <div className="w-2 h-2 bg-primary-400 rounded-full" />
        <div className="w-2 h-2 bg-gray-200 rounded-full" />
        <div className="w-2 h-2 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
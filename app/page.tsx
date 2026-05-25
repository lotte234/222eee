"use client";

import { useState } from "react";
import { WelcomePage } from "../components/WelcomePage";
import { HomePage } from "../components/HomePage";
import { SoundPage } from "../components/SoundPage";
import { ProfilePage } from "../components/ProfilePage";
import { BottomNav } from "../components/BottomNav";

type TabType = "home" | "sound" | "profile";

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("home");

  const handleStart = () => {
    setShowWelcome(false);
  };

  const handleSkip = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <WelcomePage onStart={handleStart} onSkip={handleSkip} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto relative">
        {activeTab === "home" && <HomePage />}
        {activeTab === "sound" && <SoundPage />}
        {activeTab === "profile" && <ProfilePage />}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
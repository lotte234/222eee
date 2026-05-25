export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  totalMinutes: number;
  todayMinutes: number;
}

export interface SoundEffect {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
}

export interface Preference {
  id: string;
  label: string;
  description: string;
  currentValue: string;
  icon: string;
  type: "text" | "toggle" | "slider";
  value?: boolean | number;
}

export interface GuideItem {
  id: number;
  title: string;
  description: string;
}

export interface SettingItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  hasArrow: boolean;
}

export const userProfile: UserProfile = {
  id: "1",
  name: "林间漫步者",
  avatar: "https://neeko-copilot.bytedance.net/api/text2image?prompt=peaceful%20man%20portrait%20meditation%20zen&image_size=square",
  totalMinutes: 1250,
  todayMinutes: 45,
};

export const soundEffects: SoundEffect[] = [
  { id: "rain", name: "细雨", icon: "cloud-rain", isActive: true },
  { id: "waves", name: "海浪", icon: "waves", isActive: false },
  { id: "wind", name: "清风", icon: "wind", isActive: false },
  { id: "birds", name: "鸟鸣", icon: "bird", isActive: false },
  { id: "fire", name: "篝火", icon: "flame", isActive: false },
  { id: "stream", name: "溪流", icon: "droplets", isActive: false },
];

export const preferences: Preference[] = [
  {
    id: "theme",
    label: "视觉主题",
    description: "调整应用的视觉风格",
    currentValue: "极简柔和",
    icon: "palette",
    type: "text",
  },
  {
    id: "animation",
    label: "动画强度",
    description: "调整场景动效的流畅感",
    currentValue: "中等",
    icon: "zap",
    type: "text",
  },
  {
    id: "notifications",
    label: "通知闭合",
    description: "放空期间自动屏蔽系统提醒",
    currentValue: "",
    icon: "bell-off",
    type: "toggle",
    value: true,
  },
];

export const guideItems: GuideItem[] = [
  {
    id: 1,
    title: "寻找安静角落",
    description: "尽量在不受干扰的私密空间进行。",
  },
  {
    id: 2,
    title: "戴上耳机",
    description: "高品质白噪声能更快进入沉浸状态。",
  },
  {
    id: 3,
    title: "随文而思",
    description: "视线轻触跳出的文字，不留执念。",
  },
];

export const settingItems: SettingItem[] = [
  {
    id: "privacy",
    title: "隐私与数据导出",
    description: "管理你的冥想记录与安全设置",
    icon: "shield",
    hasArrow: true,
  },
  {
    id: "feedback",
    title: "反馈中心",
    description: "告诉我们你的使用感受",
    icon: "message-square",
    hasArrow: true,
  },
  {
    id: "community",
    title: "加入社区",
    description: "与其他漫步者分享宁静时刻",
    icon: "users",
    hasArrow: true,
  },
];

export const healingTexts: string[] = [
  "风在摇它的叶子，草在结它的种子。",
  "此刻，只属于你自己。",
  "心若止水，万物皆静。",
  "深呼吸，让烦恼随气流散去。",
  "静水流深，心如止水。",
];

export const versionInfo = {
  name: "CalmFlow",
  version: "VERSION 1.2.0 (GOLDEN)",
};

export const timingOptions = ["5 min", "10 min", "20 min", "自定义"];
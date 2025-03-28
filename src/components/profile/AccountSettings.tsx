
import React, { useState } from "react";
import { Moon, Sun, Bell, Shield, Languages } from "lucide-react";

interface SettingToggleProps {
  label: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
  onChange: () => void;
}

const SettingToggle = ({ label, description, icon, enabled, onChange }: SettingToggleProps) => (
  <div className="flex items-center justify-between py-3 border-b border-border last:border-none">
    <div className="flex items-start">
      <div className="p-2 bg-primary/10 rounded-full mr-3">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-sm">{label}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={enabled} onChange={onChange} className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-tipme-green"></div>
    </label>
  </div>
);

const AccountSettings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [language, setLanguage] = useState(false);

  return (
    <div className="tipme-card">
      <h2 className="font-bold text-lg mb-4">Account Settings</h2>
      
      <SettingToggle 
        label="Dark Mode" 
        description="Switch between light and dark theme"
        icon={darkMode ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-primary" />}
        enabled={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      
      <SettingToggle 
        label="Notifications" 
        description="Receive alerts about tips and activity"
        icon={<Bell size={20} className="text-primary" />}
        enabled={notifications}
        onChange={() => setNotifications(!notifications)}
      />
      
      <SettingToggle 
        label="Two-Factor Authentication" 
        description="Add an extra layer of security"
        icon={<Shield size={20} className="text-primary" />}
        enabled={twoFactor}
        onChange={() => setTwoFactor(!twoFactor)}
      />
      
      <SettingToggle 
        label="Language Preferences" 
        description="Change language settings"
        icon={<Languages size={20} className="text-primary" />}
        enabled={language}
        onChange={() => setLanguage(!language)}
      />
    </div>
  );
};

export default AccountSettings;

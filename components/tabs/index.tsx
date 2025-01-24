import React from "react";

interface Tab {
  label: string;
  value: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: Tab["value"];
  onTabChange: (value: Tab["value"]) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-lg ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors 
            ${
              activeTab === tab.value
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

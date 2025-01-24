import React from 'react';

interface Tab {
  label: string;
  value: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: Tab['value'];
  onTabChange: (value: Tab['value']) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}) => {
  return (
    <div
      className={`flex items-center space-x-2 bg-gray-100 px-1 py-1 rounded-md ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-4 py-2 rounded-md text-md font-medium transition-colors w-full
            ${
              activeTab === tab.value
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

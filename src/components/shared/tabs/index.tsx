import { TabType } from '@/components/library/asset/types';

export interface TabsProps {
  tabs: TabType[];
  activeTab: TabType['_id'];
  onTabChange: (id: TabType['_id']) => void;
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
          key={tab._id}
          onClick={() => onTabChange(tab._id)}
          className={`px-4 py-2 rounded-md text-md font-medium transition-colors w-full
            ${
              activeTab === tab._id
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

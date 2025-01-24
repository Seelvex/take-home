export interface Tab {
  label: string;
  value: number;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: Tab['value'];
  onTabChange: (value: Tab['value']) => void;
  className?: string;
}

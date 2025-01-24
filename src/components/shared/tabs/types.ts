export interface Tab {
  id: string;
  label: string;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: Tab['id'];
  onTabChange: (id: Tab['id']) => void;
  className?: string;
}

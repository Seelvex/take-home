import { SectionType } from '@/components/library/section/types';

export interface Tab {
  id: string;
  label: string;
  sections?: SectionType[];
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: Tab['id'];
  onTabChange: (id: Tab['id']) => void;
  className?: string;
}

import { SectionType } from '../section/types';

interface BusinessQuestion {
  id: string;
  title: string;
  description: string;
}

export interface AssetType {
  _id: string;
  title: string;
  subTitle?: string;
  description?: string;
  type: string;
  tags?: string[];
  metrics?: Record<string, number | string>;
  previewUrl?: string;
  url?: string;
  businessQuestions?: BusinessQuestion[];
}

export interface AssetProps {
  asset: AssetType;
  onClick?: (id: string) => void;
}

export interface TabType {
  _id: string;
  label: string;
  sections: SectionType[];
}

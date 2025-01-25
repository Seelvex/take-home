import { SectionType } from '../section/types';

interface BusinessQuestion {
  id: string;
  title: string;
  description: string;
}

interface LinkedEntity {
  _id: string;
  type: string;
  using: boolean;
}

interface Affiliate {
  _id: string;
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
  metrics?: Record<string, number | string | boolean | null | undefined>;
  previewUrl?: string;
  url?: string;
  businessQuestions?: BusinessQuestion[];
  linkedEntities?: LinkedEntity[];
  calculations?: Record<string, string>;
  visuals?: string[];
  affiliateList?: (Affiliate & { score: number })[];
}

export interface AssetProps {
  asset: AssetType;
  className?: string;
  selected?: boolean;
  onClick?: (id: string) => void;
}

export interface TabType {
  _id: string;
  label: string;
  sections: SectionType[];
}

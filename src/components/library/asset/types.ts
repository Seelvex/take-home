import { SectionType } from '../section/types';

export interface AssetType {
  _id: string;
  title: string;
  description?: string;
  type: string;
}

export interface AssetProps {
  asset: AssetType;
  onClick?: (id: string) => void;
}

export interface TabType {
  id: string;
  label: string;
  sections: SectionType[];
}

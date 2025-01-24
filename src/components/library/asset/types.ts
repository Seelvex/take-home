import React from 'react';

export interface AssetType {
  id: string;
  title: string;
  description?: string;
  type: string;
}

export interface AssetProps extends AssetType {
  onClick?: (id: string) => void;
}

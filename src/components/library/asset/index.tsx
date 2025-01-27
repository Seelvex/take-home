import React from 'react';
import { AssetProps } from './types';
import Card from '@/components/shared/card';
import SquareAvatar from '@/components/shared/square-avatar';
import { ChartPieIcon } from '@heroicons/react/24/solid';

/**
 * Asset component
 * Used to display generic asset information
 */
const Asset: React.FC<AssetProps> = (props) => {
  const { asset, onClick, className, selected } = props;

  /**
   * Handle click event
   */
  const handleClick = React.useCallback(() => {
    if (typeof onClick !== 'function') return;
    onClick(asset?._id);
  }, [asset?._id, onClick]);

  return (
    <Card
      className={`gap-4 max-h-52 cursor-pointer ${className} ${selected ? 'bg-slate-100' : ''}`}
      onClick={handleClick}
    >
      <SquareAvatar
        component={<ChartPieIcon className="h-10 w-10" />}
        className="text-slate-500 w-[100px] h-[100px]"
      />
      <div className="place-content-center">
        <p className="font-bold">{asset?.title}</p>
        {asset?.description ? <p>{asset.description}</p> : null}
      </div>
    </Card>
  );
};

export default Asset;

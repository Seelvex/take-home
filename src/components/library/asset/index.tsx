import React from 'react';
import { AssetProps } from './types';
import Card from '@/components/shared/card';
import SquareAvatar from '@/components/shared/square-avatar';

const Asset: React.FC<AssetProps> = (props) => {
  const { asset, onClick } = props;

  const handleClick = React.useCallback(() => {
    if (typeof onClick !== 'function') return;
    onClick(asset?._id);
  }, [asset?._id, onClick]);

  return (
    <Card className="gap-4 max-h-52" onClick={handleClick}>
      <SquareAvatar component={asset?.type} />
      <div className="place-content-center">
        <p className="font-bold">{asset?.title}</p>
        {asset?.description ? <p>{asset.description}</p> : null}
      </div>
    </Card>
  );
};

export default Asset;

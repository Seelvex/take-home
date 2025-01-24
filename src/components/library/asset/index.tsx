import React from 'react';
import { AssetProps } from './types';
import Card from '@/components/shared/card';

const Asset: React.FC<AssetProps> = (props) => {
  const { id, title, description, onClick } = props;

  const handleClick = React.useCallback(() => {
    if (typeof onClick !== 'function') return;
    onClick(id);
  }, [id, onClick]);

  return (
    <Card className="gap-4 max-h-52" onClick={handleClick}>
      <div className="place-content-center text-center rounded-md aspect-square w-1/4 bg-slate-200">
        <span>i</span>
      </div>
      <div className="place-content-center">
        <p className="font-bold">{title}</p>
        {description ? <p>{description}</p> : null}
      </div>
    </Card>
  );
};

export default Asset;

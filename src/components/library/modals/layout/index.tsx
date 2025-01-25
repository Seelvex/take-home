import React from 'react';
import { AssetType } from '../../asset/types';
import AssetModal from '../asset';
import Divider from '@/components/shared/divider';

interface LayoutModalProps {
  asset: AssetType;
}

const LayoutModal: React.FC<LayoutModalProps> = (props) => {
  const { asset } = props;

  const metricsComponent = React.useMemo(() => {
    if (!asset.metrics) return null;

    const entries = Object.entries(asset.metrics);
    return entries.map(([key, value], i) => {
      return (
        <React.Fragment key={key}>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg">{value}</p>
            <p className="text-sm text-slate-400">{key}</p>
          </div>
          {i < entries.length - 1 ? <Divider orientation={'vertical'} /> : null}
        </React.Fragment>
      );
    });
  }, [asset]);

  return (
    <AssetModal asset={asset}>
      <div className="flex flex-col gap-4 mb-4 w-full items-center">
        <div className="flex justify-between md:w-4/5 w-full p-4">
          {metricsComponent}
        </div>

        <div className="flex min-h-[30vh] w-full bg-slate-200 items-center justify-center rounded-md">
          preview
        </div>
      </div>
    </AssetModal>
  );
};

export default LayoutModal;

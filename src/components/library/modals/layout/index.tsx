import React from 'react';
import { AssetType } from '../../asset/types';
import AssetModal from '../asset';
import Divider from '@/components/shared/divider';
import { useQuery } from '@tanstack/react-query';
import { getAssets } from '@/lib/api/assets';
import Asset from '../../asset';

interface LayoutModalProps {
  asset: AssetType;
}

const LayoutModal: React.FC<LayoutModalProps> = (props) => {
  const { asset } = props;

  const { data: linkedEntities } = useQuery({
    queryKey: ['asset', asset.linkedEntities],
    queryFn: () =>
      getAssets({ ids: asset.linkedEntities?.map((entity) => entity._id) }),
    enabled: !!asset.linkedEntities,
  });

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
      <div className="flex flex-col gap-8 mb-4 w-full items-center">
        <div className="flex justify-between md:w-4/5 w-full p-4">
          {metricsComponent}
        </div>

        <div className="flex min-h-[20vh] w-full bg-slate-100 items-center justify-center rounded-md">
          preview
        </div>

        <div className="w-full flex flex-col gap-4">
          <p className="text-xl font-semibold">Linked KPIs</p>
          {linkedEntities && linkedEntities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linkedEntities.map((linkedEntity) => (
                <Asset
                  key={linkedEntity._id}
                  asset={linkedEntity}
                  selected={
                    asset.linkedEntities?.find(
                      (entity) => entity._id === linkedEntity._id,
                    )?.using
                  }
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </AssetModal>
  );
};

export default LayoutModal;

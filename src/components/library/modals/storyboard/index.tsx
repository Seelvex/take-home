import { useQuery } from '@tanstack/react-query';
import { AssetType } from '../../asset/types';
import AffiliateApplicability from '../../shared/AffiliateApplicability';
import AssetModal from '../asset';
import { getAssets } from '@/lib/api/assets';
import Asset from '../../asset';
import Button from '@/components/shared/button';
import React from 'react';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import Card from '@/components/shared/card';
import { useRequestAccessContext } from '@/hooks/useRequestAccessContext';

interface StoryboardModalProps {
  asset: AssetType;
  closeAssetModal: () => void;
}

/**
 * Storyboard modal component
 * Used to display storyboard specific information
 */
const StoryboardModal: React.FC<StoryboardModalProps> = (props) => {
  const { asset, closeAssetModal } = props;

  const { handleClick } = useRequestAccessContext();

  /**
   * Fetch asset linked entities (full data) using the asset linked entities ids
   */
  const { data: linkedEntities } = useQuery({
    queryKey: ['asset', asset.linkedEntities],
    queryFn: () =>
      getAssets({ ids: asset.linkedEntities?.map((entity) => entity._id) }),
    enabled: !!asset.linkedEntities,
  });

  /**
   * request access
   */
  const handleRequestAccess = React.useCallback(() => {
    console.log('handleRequestAccess', asset);
    handleClick();

    /**
     * close the asset modal after the request access button is clicked to avoid modal on modal
     */
    closeAssetModal();
  }, [asset, closeAssetModal, handleClick]);

  /**
   * @todo implement user based access control
   */
  const hasAccess = React.useMemo(() => {
    return false;
  }, []);

  return (
    <AssetModal asset={asset}>
      <div className="flex flex-col gap-8 w-full">
        {!hasAccess ? (
          <Card>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-md text-slate-500">
                You do not have access to this resource, click the button below
                to request access.
              </p>
              <Button
                variant="secondary"
                onClick={handleRequestAccess}
                label="Request access"
                icon={<PlusIcon className="h-5 w-5" />}
                className="w-full"
              />
            </div>
          </Card>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">KPIs</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {linkedEntities && linkedEntities.length > 0
                  ? linkedEntities.map((linkedEntity) => (
                      <Asset key={linkedEntity._id} asset={linkedEntity} />
                    ))
                  : null}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Affiliate Applicability</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {asset.affiliateList?.map((affiliate) => (
                  <AffiliateApplicability
                    key={affiliate._id}
                    affiliate={affiliate}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </AssetModal>
  );
};

export default StoryboardModal;

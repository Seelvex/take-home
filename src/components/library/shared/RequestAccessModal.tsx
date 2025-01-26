import React from 'react';
import { AssetType, TabType } from '../asset/types';
import TextArea from '@/components/shared/input/TextArea';
import Button from '@/components/shared/button';
import Chip from '@/components/shared/chip';

interface RequestAccessModalProps {
  tab?: TabType;
  asset?: AssetType;
}

/**
 * Request access modal
 * - This modal will be used to request access to the asset/s by the user
 */
const RequestAccessModal: React.FC<RequestAccessModalProps> = (props) => {
  const { tab, asset } = props;

  const handleRequestAccess = React.useCallback(() => {
    console.log('handleRequestAccess', tab, asset);
  }, [asset, tab]);

  return (
    <div className="flex flex-col gap-6 min-h-[50vh] px-4">
      <h3 className="text-3xl font-bold text-center">Request Access</h3>
      <div className="flex gap-4 w-full">
        <p className="text-lg">
          You are requesting access to the following {asset?.type || 'tab'}:
        </p>
        {asset?.title ? (
          <div className="flex gap-2">
            <p className="text-lg bold">{asset?.title}</p>
            <Chip label={asset?.type || ''} />
          </div>
        ) : (
          <Chip label={tab?.label || ''} />
        )}
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="text-md">Please provide a reason for your request:</p>
        <TextArea
          className="w-full"
          placeholder="Reason for request"
          rows={4}
        />
        <Button label="Request Access" onClick={handleRequestAccess} />
      </div>
    </div>
  );
};

export default RequestAccessModal;

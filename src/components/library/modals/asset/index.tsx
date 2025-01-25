import SquareAvatar from '@/components/shared/square-avatar';
import { AssetType } from '../../asset/types';
import Chip from '@/components/shared/chip';

interface AssetModalProps extends React.PropsWithChildren {
  asset: AssetType;
}

const AssetModal: React.FC<AssetModalProps> = (props) => {
  const { asset, children } = props;

  return (
    <div className="flex flex-col gap-4 mb-4 w-full items-center">
      <SquareAvatar component={asset.type} />

      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-4 items-center">
          <h4 className="text-3xl">{asset.title}</h4>
          <Chip label={asset.type} />
        </div>
        <p>{asset.description}</p>
      </div>

      {children}
    </div>
  );
};

export default AssetModal;

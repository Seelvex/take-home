import SquareAvatar from '@/components/shared/square-avatar';
import { AssetType } from '../../asset/types';
import Chip from '@/components/shared/chip';
import AssetModal from '../asset';

interface LayoutModalProps {
  asset: AssetType;
}

const LayoutModal: React.FC<LayoutModalProps> = (props) => {
  const { asset } = props;

  return (
    <AssetModal asset={asset}>
      <div className="flex flex-col gap-4 mb-4 w-full items-center">
        LAYOUT MODAL BODY
      </div>
    </AssetModal>
  );
};

export default LayoutModal;

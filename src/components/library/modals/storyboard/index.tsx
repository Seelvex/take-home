import { AssetType } from '../../asset/types';
import AssetModal from '../asset';

interface StoryboardModalProps {
  asset: AssetType;
}

const StoryboardModal: React.FC<StoryboardModalProps> = (props) => {
  const { asset } = props;

  return (
    <AssetModal asset={asset}>
      <div className="flex flex-col gap-4 mb-4 w-full items-center">
        STORYBOARD MODAL BODY
      </div>
    </AssetModal>
  );
};

export default StoryboardModal;

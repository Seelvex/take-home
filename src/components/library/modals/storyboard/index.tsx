import { AssetType } from '../../asset/types';

interface StoryboardModalProps {
  asset: AssetType;
}

const StoryboardModal: React.FC<StoryboardModalProps> = (props) => {
  const { asset } = props;

  return (
    <div className="flex flex-col gap-4 mb-4">
      <p>Storyboard MODAL</p>
      {asset.title} - {asset.type}
    </div>
  );
};

export default StoryboardModal;

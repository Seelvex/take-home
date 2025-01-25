import { AssetType } from '../../asset/types';

interface AssetModalProps {
  asset: AssetType;
}

const AssetModal: React.FC<AssetModalProps> = (props) => {
  const { asset } = props;

  return (
    <div className="flex flex-col gap-4 mb-4">
      <p>ASSET MODAL</p>
      {asset.title} - {asset.type}
    </div>
  );
};

export default AssetModal;

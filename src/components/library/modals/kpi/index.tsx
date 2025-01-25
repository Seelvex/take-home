import { AssetType } from '../../asset/types';
import AssetModal from '../asset';

interface KpiModalProps {
  asset: AssetType;
}

const KpiModal: React.FC<KpiModalProps> = (props) => {
  const { asset } = props;

  return (
    <AssetModal asset={asset}>
      <div className="flex flex-col gap-4 mb-4 w-full items-center">
        KPI MODAL BODY
      </div>
    </AssetModal>
  );
};

export default KpiModal;

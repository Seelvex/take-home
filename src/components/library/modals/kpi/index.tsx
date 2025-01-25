import { AssetType } from '../../asset/types';

interface KpiModalProps {
  asset: AssetType;
}

const KpiModal: React.FC<KpiModalProps> = (props) => {
  const { asset } = props;

  return (
    <div className="flex flex-col gap-4 mb-4">
      <p>KPI MODAL</p>
      {asset.title} - {asset.type}
    </div>
  );
};

export default KpiModal;

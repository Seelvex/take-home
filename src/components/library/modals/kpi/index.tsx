import { AssetType } from '../../asset/types';
import AffiliateApplicability from '../../shared/AffiliateApplicability';
import AssetModal from '../asset';

interface KpiModalProps {
  asset: AssetType;
}

/**
 * KPI modal component
 * Used to display KPI specific information
 */
const KpiModal: React.FC<KpiModalProps> = (props) => {
  const { asset } = props;

  return (
    <AssetModal asset={asset}>
      <div className="flex flex-col gap-8 w-full px-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Business Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {asset.businessQuestions?.map((question) => (
              <div key={question.id} className="bg-slate-100 p-4 rounded-md">
                <h4 className="text-md font-semibold">{question.title}</h4>
                <p className="text-slate-400 mt-2">{question.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Metric IDs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {asset.metrics &&
              Object.entries(asset.metrics).map(([key, value]) => (
                <div key={key} className="border text-center p-4 rounded-md">
                  <h4 className="text-md font-semibold">{key}</h4>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Calculation</h3>
          <div className="flex flex-col gap-4">
            {asset.calculations &&
              Object.entries(asset.calculations).map(([key, value]) => (
                <div key={key}>
                  <h4 className="text-md font-semibold">{key}</h4>
                  <p className="text-slate-400 mt-2">{value}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Visuals Available</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
            {asset.visuals?.map((visual) => (
              <div key={visual} className="bg-slate-100 p-4 rounded-md">
                <h4 className="text-md font-semibold text-center">{visual}</h4>
              </div>
            ))}
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
      </div>
    </AssetModal>
  );
};

export default KpiModal;

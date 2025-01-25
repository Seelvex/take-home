import { Affiliate } from '../asset/types';

interface AffiliateApplicabilityProps {
  affiliate: Affiliate;
}

const AffiliateApplicability: React.FC<AffiliateApplicabilityProps> = (
  props,
) => {
  const { affiliate } = props;

  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <h4 className="text-md font-semibold">{affiliate.title}</h4>
      <p className="text-slate-400 mt-2">{affiliate.description}</p>
      <p className="text-slate-400 mt-2">
        <strong>Score:</strong> {affiliate.score}
      </p>
    </div>
  );
};

export default AffiliateApplicability;

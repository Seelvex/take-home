import SquareAvatar from '@/components/shared/square-avatar';
import { AssetType } from '../../asset/types';
import Chip from '@/components/shared/chip';

interface AssetModalProps extends React.PropsWithChildren {
  asset: AssetType;
}

const AssetModal: React.FC<AssetModalProps> = (props) => {
  const { asset, children } = props;

  return (
    <div className="flex flex-col gap-4 mb-4 w-full items-center px-4">
      <SquareAvatar component={asset.type} className="max-w-[80px]" />

      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-4 items-center">
            <h4 className="text-3xl font-semibold">{asset.title}</h4>
            <Chip label={asset.type} />
          </div>
          <p className="text-sm text-slate-400">{asset.subTitle}</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          {asset?.description ? <p>{asset.description}</p> : null}
          {asset?.tags && asset.tags.length > 0 ? (
            <div
              className={`grid grid-cols-${asset.tags.length > 2 ? '3' : asset.tags.length} gap-2`}
            >
              {asset.tags.map((tag) => (
                <Chip key={tag} label={`#${tag}`} />
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {children}
    </div>
  );
};

export default AssetModal;

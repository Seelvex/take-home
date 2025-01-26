import AssetModal from '@/components/library/pages/asset';
import KpiPage from '@/components/library/pages/kpi';
import LayoutPage from '@/components/library/pages/layout';
import StoryboardPage from '@/components/library/pages/storyboard';
import { getAssets } from '@/lib/api/assets';

export default async function KpiDetail({
  params,
}: {
  params: Promise<{ id: string; type: string }>;
}) {
  const { id, type } = await params;

  const asset = await getAssets({ _id: id });

  switch (type) {
    case 'kpi':
      return <KpiPage asset={asset?.[0]} />;
    case 'layout':
      return <LayoutPage asset={asset?.[0]} />;
    case 'storyboard':
      return <StoryboardPage asset={asset?.[0]} />;
    default:
      return (
        <AssetModal asset={asset?.[0]}>
          <p>Type not recognized</p>
        </AssetModal>
      );
  }
}

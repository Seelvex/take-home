'use client';

import React from 'react';
import useModal from '@/hooks/useModal';
import useSearch from '@/hooks/useSearch';
import { useQuery } from '@tanstack/react-query';
import { AssetType, TabType } from '../asset/types';
import { getAssets } from '@/lib/api/assets';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import Input from '@/components/shared/input';
import Tabs from '@/components/shared/tabs';
import Section from '../section';
import Asset from '../asset';
import Modal from '@/components/shared/modal';
import { getTabs } from '@/lib/api/tabs';
import KpiModal from '../modals/kpi';
import LayoutModal from '../modals/layout';
import AssetModal from '../modals/asset';

const FormattedView: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>();
  const [activeAsset, setActiveAsset] = React.useState<AssetType>();

  const { isOpen, handleClick } = useModal();
  const { searchValue, setSearchValue } = useSearch();

  const { data: tabs } = useQuery({
    queryKey: ['library-tabs'],
    queryFn: getTabs,
  });

  React.useEffect(() => {
    if (tabs && tabs.length > 0) {
      setActiveTab(tabs[0]._id);
    }
  }, [tabs]);

  const selectedTab = React.useMemo(() => {
    return tabs?.find((tab) => tab._id === activeTab);
  }, [tabs, activeTab]);

  const currentAssetsDataTypes = React.useMemo(() => {
    const allowedTypes = selectedTab?.sections
      ?.map((s) => s.allowedTypes)
      .flat();
    const uniqueTypes = Array.from(new Set(allowedTypes));
    return uniqueTypes;
  }, [selectedTab]);

  const handleAssetClick = React.useCallback(
    (asset: AssetType) => {
      setActiveAsset(asset);
      handleClick();
    },
    [handleClick],
  );

  const { data: assetsList, isLoading: assetsListLoading } = useQuery({
    queryKey: ['library-assets-by-tab', currentAssetsDataTypes, searchValue],
    queryFn: async () => {
      const payload: { searchTerms?: string; types: string[] } = {
        types: [],
      };
      if (currentAssetsDataTypes) {
        payload.types = currentAssetsDataTypes;
      }

      if (searchValue) {
        const formattedValue = searchValue.trim();
        if (formattedValue.length > 0) {
          payload.searchTerms = formattedValue;
        }
      }

      return await getAssets(payload);
    },
    enabled: !!currentAssetsDataTypes,
  });

  const modalContent = React.useMemo(() => {
    if (!activeAsset) return null;
    switch (activeAsset.type) {
      case 'kpi':
        return <KpiModal asset={activeAsset} />;
      case 'layout':
        return <LayoutModal asset={activeAsset} />;
      default:
        return <AssetModal asset={activeAsset} />;
    }
  }, [activeAsset]);

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue],
  );

  return (
    <React.Fragment>
      <div>
        <Input
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          placeholder="Type to search..."
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>

      {tabs && activeTab ? (
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      ) : null}

      {selectedTab?.sections
        ? selectedTab.sections.map((s) => (
            <Section key={s.id} {...s}>
              {assetsListLoading ? 'Loading...' : null}
              {assetsList && assetsList.length > 0 ? (
                <div className="flex gap-4 md:flex-row flex-col">
                  {assetsList?.map((asset) => (
                    <Asset
                      key={asset._id.toString()}
                      asset={asset}
                      onClick={() => handleAssetClick(asset)}
                    />
                  ))}
                </div>
              ) : (
                <p>No data, try different filters</p>
              )}
            </Section>
          ))
        : null}

      <Modal isOpen={isOpen} title={activeAsset?.title} onClose={handleClick}>
        {modalContent}
      </Modal>
    </React.Fragment>
  );
};

export default FormattedView;

'use client';

import React from 'react';
import useModal from '@/hooks/useModal';
import useSearch from '@/hooks/useSearch';
import { useQuery } from '@tanstack/react-query';
import { TabType } from '../asset/types';
import { getAssets } from '@/lib/api/assets';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import Input from '@/components/shared/input';
import Tabs from '@/components/shared/tabs';
import Section from '../section';
import Asset from '../asset';
import Modal from '@/components/shared/modal';

interface FormattedViewProps {
  tabs: TabType[];
}

const FormattedView: React.FC<FormattedViewProps> = (props) => {
  const { tabs } = props;

  const [activeTab, setActiveTab] = React.useState<string>();
  const [activeAsset, setActiveAsset] = React.useState<string>();

  const { isOpen, handleClick } = useModal();
  const { searchValue, setSearchValue } = useSearch();

  React.useEffect(() => {
    if (tabs && tabs.length > 0) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs]);

  const selectedTab = React.useMemo(() => {
    return tabs?.find((tab) => tab.id === activeTab);
  }, [tabs, activeTab]);

  const currentAssetsDataTypes = React.useMemo(() => {
    const allowedTypes = selectedTab?.sections
      ?.map((s) => s.allowedTypes)
      .flat();
    const uniqueTypes = Array.from(new Set(allowedTypes));
    return uniqueTypes;
  }, [selectedTab]);

  const handleAssetClick = React.useCallback(
    (id: string) => {
      setActiveAsset(id);
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

  const selectedAsset = React.useMemo(
    () => assetsList?.find((asset) => asset._id.toString() === activeAsset),
    [activeAsset, assetsList],
  );

  const modalContent = React.useMemo(() => {
    if (!selectedAsset) return null;
    /**
     * @todo implement components/library/modals
     */
    return (
      <div className="flex flex-col gap-4 mb-4">
        {selectedAsset.title} - {selectedAsset.type}
      </div>
    );
  }, [selectedAsset]);

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue],
  );

  return (
    <React.Fragment>
      {/** @todo Search component + hook logic */}
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
              <div className="flex gap-4 md:flex-row flex-col">
                {assetsList?.map((asset) => (
                  <Asset
                    key={asset._id.toString()}
                    asset={asset}
                    onClick={handleAssetClick}
                  />
                ))}
              </div>
            </Section>
          ))
        : null}

      <Modal isOpen={isOpen} title={selectedAsset?.title} onClose={handleClick}>
        {modalContent}
      </Modal>
    </React.Fragment>
  );
};

export default FormattedView;

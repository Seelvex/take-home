'use client';

import React from 'react';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import Tabs from '@/components/shared/tabs';
import FolderArrowDownIcon from '@heroicons/react/24/solid/FolderArrowDownIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { getTabs } from '@/lib/api/tabs';
import { useQuery } from '@tanstack/react-query';
import Section from '@/components/library/section';
import { getAssets } from '@/lib/api/assets';
import Asset from '@/components/library/asset';
import useModal from '@/hooks/useModal';
import Modal from '@/components/shared/modal';

export default function Library() {
  const [activeTab, setActiveTab] = React.useState<string>();
  const [activeAsset, setActiveAsset] = React.useState<string>();

  const { data: tabs, isLoading: tabsLoading } = useQuery({
    queryKey: ['library-tabs'],
    queryFn: async () => await getTabs([]),
  });

  React.useEffect(() => {
    if (tabs && tabs.length > 0 && !tabsLoading) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs, tabsLoading]);

  const selectedTab = React.useMemo(() => {
    return tabs?.find((tab) => tab.id === activeTab);
  }, [tabs, activeTab]);

  const currentAssetsDataTypes = React.useMemo(
    () => selectedTab?.sections?.map((s) => s.dataType),
    [selectedTab],
  );

  const { data: assetsList, isLoading: assetsListLoading } = useQuery({
    queryKey: ['library-assets-by-tab', currentAssetsDataTypes],
    queryFn: async () =>
      currentAssetsDataTypes &&
      (await getAssets([
        { field: 'type', operator: 'in', value: currentAssetsDataTypes },
      ])),
    enabled: !!currentAssetsDataTypes,
  });

  const { isOpen, handleClick } = useModal();

  const handleAssetClick = React.useCallback(
    (id: string) => {
      setActiveAsset(id);
      handleClick();
    },
    [handleClick],
  );

  const selectedAsset = React.useMemo(
    () => assetsList?.find((asset) => asset.id === activeAsset),
    [activeAsset, assetsList],
  );

  const modalContent = React.useMemo(() => {
    if (!selectedAsset) return null;
    return (
      <div className="flex flex-col gap-4 mb-4">
        {selectedAsset.title} - {selectedAsset.type}
      </div>
    );
  }, [selectedAsset]);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-9">
      <div className="flex flex-row-reverse w-full">
        <Button
          label={'Request'}
          icon={<FolderArrowDownIcon className="h-5 w-5" />}
        />
      </div>
      <div className="flex flex-col gap-9 w-full lg:w-3/5 md:w-3/4">
        <div className="flex flex-col text-center gap-8 mb-6">
          <h2 className="text-5xl font-bold">Library</h2>
          <p className="text-lg">Description library</p>
        </div>

        <div>
          <Input
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            placeholder="Type to search..."
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
                      key={asset.id}
                      {...asset}
                      onClick={handleAssetClick}
                    />
                  ))}
                </div>
              </Section>
            ))
          : null}

        <Modal
          isOpen={isOpen}
          title={selectedAsset?.title}
          onClose={handleClick}
        >
          {modalContent}
        </Modal>
      </div>
    </main>
  );
}

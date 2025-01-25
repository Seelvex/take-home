'use client';

import React from 'react';
import useModal from '@/hooks/useModal';
import useSearch from '@/hooks/useSearch';
import { useQuery } from '@tanstack/react-query';
import { AssetType } from '../asset/types';
import { getAssets } from '@/lib/api/assets';
import Tabs from '@/components/shared/tabs';
import Section from '../section';
import Asset from '../asset';
import Modal from '@/components/shared/modal';
import { getTabs } from '@/lib/api/tabs';
import KpiModal from '../modals/kpi';
import LayoutModal from '../modals/layout';
import AssetModal from '../modals/asset';
import StoryboardModal from '../modals/storyboard';
import Button from '@/components/shared/button';
import LinkIcon from '@heroicons/react/24/solid/LinkIcon';
import BookmarkIcon from '@heroicons/react/24/solid/BookmarkIcon';
import LibrarySearchBar from '../search-bar';

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

  /**
   * modal content
   */
  const modalContent = React.useMemo(() => {
    if (!activeAsset) return null;
    switch (activeAsset.type) {
      case 'kpi':
        return <KpiModal asset={activeAsset} />;
      case 'layout':
        return <LayoutModal asset={activeAsset} />;
      case 'storyboard':
        return <StoryboardModal asset={activeAsset} />;
      default:
        return (
          <AssetModal asset={activeAsset}>
            <p>Type not recognized</p>
          </AssetModal>
        );
    }
  }, [activeAsset]);

  /**
   * @todo implement toggle favourite functionality
   */
  const handleToggleFavourite = React.useCallback(() => {
    console.log('handleToggleFavourite', activeAsset);
  }, [activeAsset]);

  /**
   * @todo implement copy link functionality
   */
  const handleCopyLink = React.useCallback(() => {
    console.log('handleCopyLink', activeAsset);
  }, [activeAsset]);

  const modalExtraTopActions = React.useMemo(() => {
    const items = [
      {
        label: 'Copy Link',
        onClick: handleCopyLink,
        icon: <LinkIcon className="h-5 w-5" />,
      },
    ];
    return items.map((item) => (
      <Button
        key={item.label}
        variant="icon"
        onClick={item.onClick}
        icon={item.icon}
      />
    ));
  }, [handleCopyLink]);

  /**
   * modal bottom actions
   */
  const modalBottomActions = React.useMemo(() => {
    const items = [
      {
        label: 'Favourite Item',
        onClick: handleToggleFavourite,
        icon: <BookmarkIcon className="h-5 w-5" />,
      },
    ];
    return items.map((item) => (
      <Button
        key={item.label}
        label={item.label}
        onClick={item.onClick}
        icon={item.icon}
        className="w-full"
      />
    ));
  }, [handleToggleFavourite]);

  return (
    <React.Fragment>
      <LibrarySearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {tabs && activeTab ? (
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      ) : null}

      {selectedTab?.sections
        ? selectedTab.sections.map((s) => {
            const filteredAssets = assetsList?.filter((a) => {
              let allowed = false;
              if (s.allowedTypes && s.allowedTypes.length > 0) {
                allowed = s.allowedTypes.includes(a.type);
              }
              if (s.tags && s.tags.length > 0) {
                allowed = a.tags?.some((tag) => s.tags?.includes(tag)) || false;
              }
              return allowed;
            });
            return (
              <Section key={s.id} {...s}>
                {assetsListLoading ? 'Loading...' : null}
                {filteredAssets && filteredAssets.length > 0 ? (
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    {filteredAssets?.map((asset) => (
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
            );
          })
        : null}

      <Modal
        isOpen={isOpen}
        onClose={handleClick}
        extraTopActions={modalExtraTopActions}
        bottomActions={modalBottomActions}
      >
        {modalContent}
      </Modal>
    </React.Fragment>
  );
};

export default FormattedView;

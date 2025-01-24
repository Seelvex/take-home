'use client';

import React from 'react';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import Tabs from '@/components/shared/tabs';
import FolderArrowDownIcon from '@heroicons/react/24/solid/FolderArrowDownIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { getTabs } from '@/lib/api/tabs';
import { useQuery } from '@tanstack/react-query';

/* const tabs: Tab[] = [
  {
    label: 'Featured',
    value: 1,
  },
  { label: 'KPI', value: 2 },
  { label: 'Layouts', value: 3 },
  { label: 'Storyboards', value: 4 },
]; */

/**
 * get tabs
 * search items - tab based
 * request action - form + action
 */

export default function Library() {
  const [activeTab, setActiveTab] = React.useState<string>();

  const { data: tabs, isLoading: tabsLoading } = useQuery({
    queryKey: ['library-tabs'],
    queryFn: async () => await getTabs([]),
  });

  React.useEffect(() => {
    if (tabs && tabs.length > 0) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs]);

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
      </div>
    </main>
  );
}

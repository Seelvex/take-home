'use client';

import React from 'react';
import Button from '@/components/button';
import Input from '@/components/input';
import Tabs from '@/components/tabs';
import FolderArrowDownIcon from '@heroicons/react/24/solid/FolderArrowDownIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import Section from '@/components/section';
import { Tab } from '@/components/tabs/types';

const views = [
  {
    title: 'Featured',
    description: 'Test desc',
    value: 1,
  },
  { title: 'KPI', value: 2 },
  { title: 'Layouts', value: 3 },
  { title: 'Storyboards', value: 4 },
];

const tabs: Tab[] = views.map((v) => ({ label: v.title, value: v.value }));

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(1);

  const selectedView = React.useMemo(
    () => views.find((v) => v.value === activeTab),
    [activeTab],
  );

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

        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {selectedView ? (
          <Section {...selectedView}>
            <div className="grid md:grid-cols-2 gap-4 p-1">
              {/* items.map((item) => (
                  <SectionItem key={item.title} {...item} />
                )) */}
            </div>
          </Section>
        ) : null}
      </div>
    </main>
  );
}

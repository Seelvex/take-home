'use client';

import React from 'react';
import Button from '@/components/button';
import Input from '@/components/input';
import Tabs from '@/components/tabs';
import FolderArrowDownIcon from '@heroicons/react/24/solid/FolderArrowDownIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import Section from '@/components/section';

const sections = [
  {
    label: 'Featured',
    description: 'Test desc',
    value: 1,
    items: [
      { title: 'Item Name', description: 'Item desc' },
      { title: 'Item Name1', description: 'Item desc' },
    ],
  },
  { label: 'Section 2', value: 2 },
  { label: 'Section 3', value: 3 },
];

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-9">
      <div className="flex flex-row-reverse w-full">
        <Button
          label={'Request'}
          icon={<FolderArrowDownIcon className="h-5 w-5" />}
        />
      </div>
      <div className="flex flex-col gap-9 w-full md:w-3/6">
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

        <Tabs
          tabs={sections}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="flex item-center w-full">
          <Section
            title={sections[0].label}
            items={sections[0].items || []}
            description={sections[0]?.description}
          />
        </div>
      </div>
    </main>
  );
}

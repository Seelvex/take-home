'use client';

import React from 'react';
import Button from '@/components/button';
import Input from '@/components/input';
import Tabs from '@/components/tabs';
import { FolderArrowDownIcon } from '@heroicons/react/24/solid';
import Section from '@/components/section';

const sections = [
  {
    label: 'Featured',
    description: 'Test desc',
    value: 1,
    items: [
      { title: 'Item Name', description: 'Item desc' },
      { title: 'Item Name', description: 'Item desc' },
    ],
  },
  { label: 'Section 2', value: 2 },
  { label: 'Section 3', value: 3 },
];

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex space-x-4">
        <Button label={'Primary Button'} startIcon={<FolderArrowDownIcon />} />
        <Button variant="secondary" label={'Secondary Button'} />
        <Button variant="danger" label={'Danger Button'} />
      </div>

      <div>
        <Input icon={<FolderArrowDownIcon />} placeholder="Type to search..." />
      </div>

      <div>
        <Tabs
          tabs={sections}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      <div className="w-full">
        <Section
          title={sections[0].label}
          items={sections[0].items || []}
          description={sections[0]?.description}
        />
      </div>
    </main>
  );
}

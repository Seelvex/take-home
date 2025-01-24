'use client';

import React from 'react';
import Button from '@/components/button';
import Input from '@/components/input';
import Tabs from '@/components/tabs';
import { FolderArrowDownIcon } from '@heroicons/react/24/solid';

const sections = [
  { label: 'Featured', value: 1 },
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
    </main>
  );
}

import React from 'react';
import Button from '@/components/shared/button';
import FolderArrowDownIcon from '@heroicons/react/24/solid/FolderArrowDownIcon';
import { getTabs } from '@/lib/api/tabs';
import FormattedView from '@/components/library/formatted-view';

export default async function Library() {
  const tabs = await getTabs();

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

        <FormattedView tabs={tabs} />
      </div>
    </main>
  );
}

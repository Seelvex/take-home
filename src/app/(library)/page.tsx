import React from 'react';
import FormattedView from '@/components/library/formatted-view';
import LibraryHeader from '@/components/library/header';

export default async function Library() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-9">
      <LibraryHeader />

      <div className="flex flex-col gap-9 w-full xl:w-3/5 md:w-3/4">
        <div className="flex flex-col text-center gap-8 mb-6">
          <h2 className="text-5xl font-bold">Library</h2>
          <p className="text-lg">Description library</p>
        </div>

        <FormattedView />
      </div>
    </main>
  );
}

'use client';

import Button from '@/components/shared/button';
import FolderArrowDownIcon from '@heroicons/react/24/solid/FolderArrowDownIcon';
import React from 'react';

/**
 * Library page header component
 */
const LibraryHeader: React.FC = () => {
  /**
   * @todo implement logic to handle request
   */
  const handleClickRequest = React.useCallback(() => {
    console.log('Request');
  }, []);

  return (
    <div className="flex flex-row-reverse w-full">
      <Button
        label={'Request'}
        icon={<FolderArrowDownIcon className="h-5 w-5" />}
        onClick={handleClickRequest}
      />
    </div>
  );
};

export default LibraryHeader;

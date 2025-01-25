'use client';

import React from 'react';

const useSearch = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  return { searchValue, setSearchValue };
};

export default useSearch;

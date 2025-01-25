'use client';

import { getRecentSearches } from '@/lib/api/searches';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useSearch = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  /**
   * @todo implement logic to fetch recent searches using userId
   */
  const { data: recentSearches } = useQuery({
    queryKey: ['recent-searches', 'user-id'],
    queryFn: getRecentSearches,
  });

  return { searchValue, recentSearches, setSearchValue };
};

export default useSearch;

'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RequestAccessProvider } from '@/hooks/useRequestAccessContext';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RequestAccessProvider>{children}</RequestAccessProvider>
    </QueryClientProvider>
  );
};

export default Providers;

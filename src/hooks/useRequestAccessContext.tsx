'use client'; // This makes the provider a client component

import React from 'react';
import useModal from './useModal';
import { AssetType, TabType } from '@/components/library/asset/types';

const RequestAccessContext = React.createContext<
  | {
      isOpen: boolean;
      handleClick: () => void;
      handleRequestAccess: (
        tab?: TabType,
        asset?: AssetType,
        reason?: string,
      ) => void;
    }
  | undefined
>(undefined);

export const RequestAccessProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isOpen, handleClick } = useModal();

  /**
   * Request access handler
   * @todo Implement request access handler logic on db by user
   */
  const handleRequestAccess = React.useCallback(
    (tab?: TabType, asset?: AssetType, reason?: string) => {
      console.log('Requesting access', tab, asset, reason);
    },
    [],
  );

  return (
    <RequestAccessContext.Provider
      value={{ isOpen, handleClick, handleRequestAccess }}
    >
      {children}
    </RequestAccessContext.Provider>
  );
};

export const useRequestAccessContext = () => {
  const context = React.useContext(RequestAccessContext);
  if (!context)
    throw new Error(
      'useRequestAccessContext must be used within an RequestAccessProvider',
    );
  return context;
};

'use client'; // This makes the provider a client component

import React from 'react';
import useModal from './useModal';

const RequestAccessContext = React.createContext<
  { isOpen: boolean; handleClick: () => void } | undefined
>(undefined);

export const RequestAccessProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isOpen, handleClick } = useModal();

  return (
    <RequestAccessContext.Provider value={{ isOpen, handleClick }}>
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

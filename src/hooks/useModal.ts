import React from 'react';

/**
 * useModal hook
 * Used to handle modal state
 */
const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, handleClick };
};

export default useModal;

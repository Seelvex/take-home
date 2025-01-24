import React from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, handleClick };
};

export default useModal;

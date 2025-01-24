import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import React from 'react';
import Button from '../button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    isOpen,
    onClose,
    children,
    title,
    className = '',
    description,
  } = props;

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onClose();
    },
    [onClose],
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative ${className}`}
      >
        <div className="place-items-center">
          <div className="w-full flex flex-row-reverse">
            <Button
              variant="icon"
              onClick={handleClick}
              icon={<XMarkIcon className="h-5 w-5" />}
            />
          </div>

          <h3 className="text-4xl">{title}</h3>
          {description ? <p>{description}</p> : null}

          <div className="mt-4 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

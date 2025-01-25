import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import React from 'react';
import Button from '../button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  extraTopActions?: React.ReactNode;
  bottomActions?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    isOpen,
    onClose,
    children,
    title,
    className = '',
    description,
    extraTopActions,
    bottomActions,
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
        className={`bg-white rounded-lg shadow-lg xl:md:max-w-[50%] max-w-[95%] w-full p-2 relative min-w-[50%] max-h-[95%] overflow-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="place-items-center">
          <div className="w-full flex flex-row-reverse">
            <Button
              variant="icon"
              onClick={handleClick}
              icon={<XMarkIcon className="h-5 w-5" />}
            />
            {extraTopActions}
          </div>

          {title ? <h3 className="text-4xl">{title}</h3> : null}
          {description ? <p>{description}</p> : null}

          <div className="mt-2 w-full overflow-auto">{children}</div>

          <div className="flex justify-end p-2 w-full">{bottomActions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

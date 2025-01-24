import Modal from '@/components/modal';
import React from 'react';

interface SectionItemProps {
  title: string;
  description?: string;
}

const SectionItem: React.FC<SectionItemProps> = (props) => {
  const { title, description } = props;

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setModalOpen(prev => !prev);
  }, []);

  return (
    <div
      className="flex border rounded-md p-4 gap-4 w-full bg-white max-h-52"
      onClick={handleClick}
    >
      <div className="place-content-center text-center rounded-md aspect-square w-1/4 bg-slate-200">
        <span>i</span>
      </div>
      <div className="place-content-center">
        <p className="font-bold">{title}</p>
        {description ? <p>{description}</p> : null}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={handleClick}
        title={'Modal Title'}
      >
        content
      </Modal>
    </div>
  );
};

export default SectionItem;

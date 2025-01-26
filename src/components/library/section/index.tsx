import { SectionType } from './types';
import React from 'react';

/**
 * Section component
 * Used to display content in a section
 */
const Section: React.FC<React.PropsWithChildren<SectionType>> = (props) => {
  const { title, description, children } = props;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl bold">{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>

      {children}
    </div>
  );
};

export default Section;

import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Divider: React.FC<DividerProps> = (props) => {
  const { orientation = 'horizontal', className } = props;

  const dividerClassName = React.useMemo(() => {
    if (orientation === 'horizontal') {
      return `w-full h-[1px] bg-slate-200 ${className}`;
    }

    return `w-[1px] bg-slate-200 ${className}`;
  }, [className, orientation]);

  return <div className={dividerClassName}></div>;
};

export default Divider;

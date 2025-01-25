import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = (props) => {
  const { orientation = 'horizontal' } = props;

  const className = React.useMemo(() => {
    if (orientation === 'horizontal') {
      return 'w-full h-[1px] bg-slate-200';
    }

    return 'w-[1px] bg-slate-200';
  }, [orientation]);

  return <div className={className}></div>;
};

export default Divider;

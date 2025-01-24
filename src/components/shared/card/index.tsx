import React from 'react';

const Card: React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`flex border rounded-md p-4 bg-white w-full ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;

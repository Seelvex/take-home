import React from 'react';
import Button from '../button';
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: React.ReactNode;
  clearable?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { icon, clearable, ...inputProps } = props;

  const hasValue = React.useMemo(() => {
    return !!inputProps.value;
  }, [inputProps.value]);

  const handleClear = React.useCallback(() => {
    if (hasValue && typeof inputProps.onChange === 'function') {
      inputProps.onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [hasValue, inputProps]);

  return (
    <div
      className={`flex w-full items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-slate-500`}
    >
      {icon && <span className="text-gray-400">{icon}</span>}
      <input
        {...inputProps}
        className="flex-1 ml-3 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
      />
      {hasValue && clearable ? (
        <div>
          <Button
            variant="icon"
            icon={<XMarkIcon className="h-5 w-5" />}
            onClick={handleClear}
            className='py-0'
          />
        </div>
      ) : null}
    </div>
  );
};

export default Input;

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

/**
 *
 * @todo fix icon
 */
const Input: React.FC<InputProps> = (props) => {
  const { icon, ...inputProps } = props;
  return (
    <div
      className={`flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-slate-500`}
    >
      {icon && <span className="text-gray-400">{icon}</span>}
      <input
        {...inputProps}
        className="flex-1 ml-3 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default Input;

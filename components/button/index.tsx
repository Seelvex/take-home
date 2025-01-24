import React from 'react';

interface ButtonProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

/**
 *
 * @todo fix icon
 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    size = 'md',
    label,
    icon,
    className,
    disabled,
    ...buttonProps
  } = props;

  const getClassName = React.useCallback(() => {
    const baseStyles =
      'flex items-center font-normal rounded focus:outline-none focus:ring-2';
    const variantStyles = {
      primary:
        'bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500',
      secondary:
        'border border-black text-black-700 hover:bg-slate-200 focus:ring-black-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      icon: 'bg-transparent text-black-700 hover:bg-slate-200 focus:ring-black-500',
    };
    const sizeStyles = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-3 text-lg',
    };
    const disabledStyles = 'opacity-50 cursor-not-allowed';

    return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
      disabled ? disabledStyles : ''
    } ${className}`;
  }, [className, disabled, size, variant]);

  return (
    <button {...buttonProps} className={getClassName()}>
      {icon ? <div>{icon}</div> : null}
      {label ? (
        <span className={icon ? 'ml-2' : undefined}>{label}</span>
      ) : null}
    </button>
  );
};

export default Button;

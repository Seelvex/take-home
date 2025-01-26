interface ChipProps {
  label: string;
  className?: string;
  color?: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  const {
    label,
    className = '',
    color = 'bg-slate-200 text-slate-500',
  } = props;
  return (
    <div
      className={`px-2 py-1 rounded-md text-xs text-center font-semibold ${color} ${className}`}
    >
      <span>{label}</span>
    </div>
  );
};

export default Chip;

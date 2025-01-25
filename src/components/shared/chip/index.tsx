interface ChipProps {
  label: string;
  color?: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  const { label, color = 'bg-slate-300 text-slate-800' } = props;
  return (
    <div className={`px-2 py-1 rounded-md text-xs font-semibold ${color}`}>
      {label}
    </div>
  );
};

export default Chip;

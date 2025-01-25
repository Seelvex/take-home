interface ChipProps {
  label: string;
  color?: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  const { label, color = 'bg-slate-200 text-slate-500' } = props;
  return (
    <div
      className={`px-2 py-1 rounded-md text-xs text-center font-semibold ${color}`}
    >
      <p>{label}</p>
    </div>
  );
};

export default Chip;

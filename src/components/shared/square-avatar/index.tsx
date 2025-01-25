interface SquareAvatarProps {
  component: React.ReactNode;
  className?: string;
}

const SquareAvatar: React.FC<SquareAvatarProps> = (props) => {
  const { component, className } = props;

  return (
    <div
      className={`place-content-center text-center rounded-md aspect-square w-1/4 bg-slate-200 ${className}`}
    >
      <span>{component}</span>
    </div>
  );
};

export default SquareAvatar;

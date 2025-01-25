interface SquareAvatarProps {
  component: React.ReactNode;
}

const SquareAvatar: React.FC<SquareAvatarProps> = (props) => {
  const { component } = props;

  return (
    <div className="place-content-center text-center rounded-md aspect-square w-1/4 bg-slate-200">
      <span>{component}</span>
    </div>
  );
};

export default SquareAvatar;

interface SectionItemProps {
  title: string;
  description?: string;
}

const SectionItem: React.FC<SectionItemProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="flex border rounded-md p-4 gap-4 w-full bg-white max-h-52">
      <div className="place-content-center text-center rounded-md aspect-square w-1/4 bg-slate-200">
        <span>i</span>
      </div>
      <div className="place-content-center">
        <p className="font-bold">{title}</p>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
};

export default SectionItem;

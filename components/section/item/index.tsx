interface SectionItemProps {
  title: string;
  description?: string;
}

const SectionItem: React.FC<SectionItemProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="flex border rounded-md p-4 w-full bg-white">
      <div className="place-content-center text-center rounded-md aspect-square w-1/3 bg-slate-200">
        <span>i</span>
      </div>
      <div className="place-content-center w-2/3 p-4">
        <p className="font-bold">{title}</p>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
};

export default SectionItem;

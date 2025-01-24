import SectionItem from '@/components/section/item';

interface SectionItem {
  title: string;
  description?: string;
}

interface SectionProps {
  title: string;
  description?: string;
  items: SectionItem[];
}

const Section: React.FC<SectionProps> = (props) => {
  const { title, description, items } = props;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <p className="text-4xl">{title}</p>
        {description ? <p>{description}</p> : null}
      </div>

      <div className="grid md:grid-cols-2 gap-4 p-1">
        {items.map((item) => (
          <SectionItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Section;

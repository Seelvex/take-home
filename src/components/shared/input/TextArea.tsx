interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { className } = props;
  return (
    <div
      className={`flex w-full items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-slate-500`}
    >
      <textarea
        {...props}
        className={`bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 ${className}`}
      />
    </div>
  );
};

export default TextArea;

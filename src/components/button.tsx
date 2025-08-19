type ButtonProps = {
  src: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void /* TODO: Sacar opcional */;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className="flex-none font-serif text-slate-700 text-sm opacity-80 border cursor-pointer border-slate-200 bg-white rounded-md pl-2 pr-2 py-2 transition duration-100 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow active:scale-95"
      onClick={props.onClick}
    >
      <img src={props.src} height="20" width="20" />
    </button>
  );
}

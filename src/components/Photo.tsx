type Props = {
  label: string;
  src?: string;
};

export function Photo({ label, src }: Props) {
  return (
    <div className="photo">
      {src ? <img src={src} alt={label} /> : label}
    </div>
  );
}

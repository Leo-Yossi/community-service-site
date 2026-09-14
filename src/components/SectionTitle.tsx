type Props = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: Props) {
  return (
    <div className="heading">
      <p className="heading__label">{eyebrow}</p>
      <h2 className="heading__title">{title}</h2>
    </div>
  );
}

import "./styles.scss";

interface CardProps {
  title: string;
  description: string;
  tag?: string;
  index: number; // used for staggered delay
}

export default function Card({ title, description, tag, index }: CardProps) {
  return (
    <article
      className="card"
      style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
    >
      {tag && <span className="card__tag">{tag}</span>}
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </article>
  );
}

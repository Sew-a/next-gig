interface AiShowcaseCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function AiShowcaseCard({
  icon,
  title,
  desc,
}: AiShowcaseCardProps) {
  return (
    <div className="ai-showcase__card">
      <div className="ai-showcase__card-header">
        <span className="ai-showcase__card-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
    </div>
  );
}
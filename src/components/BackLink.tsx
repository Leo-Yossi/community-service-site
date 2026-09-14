import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Props = {
  to: string;
  label: string;
};

export function BackLink({ to, label }: Props) {
  return (
    <Link to={to} className="back-link">
      <ArrowLeft size={15} /> {label}
    </Link>
  );
}

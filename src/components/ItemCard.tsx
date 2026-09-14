import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { SubItem } from "../types/service";

type Props = {
  serviceId: string;
  item: SubItem;
};

export function ItemCard({ serviceId, item }: Props) {
  return (
    <Link to={`/service/${serviceId}/${item.id}`} className="item-card">
      <div className="item-card__top">
        <span className="item-card__name">{item.title}</span>
        <ArrowUpRight size={18} className="item-card__arrow" />
      </div>
      <p className="item-card__desc">{item.summary}</p>
    </Link>
  );
}

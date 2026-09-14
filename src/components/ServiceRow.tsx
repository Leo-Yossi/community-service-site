import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "../types/service";

type Props = {
  service: Service;
  index: number;
};

export function ServiceRow({ service, index }: Props) {
  return (
    <Link to={`/service/${service.id}`} className="service-row">
      <div className="service-row__top">
        <span className="service-row__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight size={20} className="service-row__arrow" />
      </div>
      <h3 className="service-row__name">{service.title}</h3>
      <p className="service-row__sub">{service.tagline}</p>
    </Link>
  );
}

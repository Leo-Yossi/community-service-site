import { ArrowUpRight } from "lucide-react";
import type { Service } from "../types/service";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <a className="service-card" href={service.detailPath}>
      <div className="service-card-top">
        <span className="service-icon">{service.icon}</span>
        <ArrowUpRight size={20} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.shortDescription}</p>
      <div className="tag-list">
        {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </a>
  );
}
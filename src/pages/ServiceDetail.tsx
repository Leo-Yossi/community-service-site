import { useParams } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { ItemCard } from "../components/ItemCard";
import { ConsultBlock } from "../components/ConsultBlock";
import { BackLink } from "../components/BackLink";
import { NotFound } from "./NotFound";
import { services } from "../data/services";

export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) return <NotFound />;

  return (
    <div className="wrap page">
      <BackLink to="/" label="返回" />

      <p className="page__eyebrow">{service.eyebrow}</p>
      <h1 className="page__title">{service.title}</h1>
      <p className="page__intro">{service.intro}</p>

      <SectionTitle eyebrow={service.eyebrow} title="具体服务" />

      {service.subItems.map((item) => (
        <ItemCard key={item.id} serviceId={service.id} item={item} />
      ))}

      <ConsultBlock />
    </div>
  );
}

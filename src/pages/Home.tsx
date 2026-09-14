import { ShopCard } from "../components/ShopCard";
import { ServiceRow } from "../components/ServiceRow";
import { SectionTitle } from "../components/SectionTitle";
import { ConsultBlock } from "../components/ConsultBlock";
import { services } from "../data/services";

export function Home() {
  return (
    <div className="wrap">
      <ShopCard />

      <SectionTitle eyebrow="SERVICE" title="我们能帮你做什么" />

      <div>
        {services.map((service, i) => (
          <ServiceRow key={service.id} service={service} index={i} />
        ))}
      </div>

      <ConsultBlock />
    </div>
  );
}

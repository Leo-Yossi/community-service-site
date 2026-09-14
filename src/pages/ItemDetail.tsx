import { useParams } from "react-router-dom";
import { CaseCompare } from "../components/CaseCompare";
import { StyleBoard } from "../components/StyleBoard";
import { ConsultBlock } from "../components/ConsultBlock";
import { BackLink } from "../components/BackLink";
import { NotFound } from "./NotFound";
import { services } from "../data/services";

export function ItemDetail() {
  const { serviceId, itemId } = useParams();
  const service = services.find((s) => s.id === serviceId);
  const item = service?.subItems.find((i) => i.id === itemId);

  if (!service || !item) return <NotFound />;

  return (
    <div className="wrap page">
      <BackLink to={`/service/${service.id}`} label={service.title} />

      <p className="page__eyebrow">{item.eyebrow}</p>
      <h1 className="page__title">{item.title}</h1>

      {item.styles && <StyleBoard styles={item.styles} />}

      {item.cases?.map((c) => <CaseCompare key={c.id} item={c} />)}

      {!item.styles && !item.cases && (
        <div className="case">
          <h3 className="case__title">了解服务</h3>
          <p className="case__note">{item.summary}</p>
        </div>
      )}

      <ConsultBlock />
    </div>
  );
}

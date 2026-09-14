import { ArrowRight } from "lucide-react";
import { shop } from "../data/services";

export function ConsultBlock() {
  return (
    <div className="consult" id="consult">
      <p className="consult__title">想了解具体服务？</p>
      <a className="btn btn--accent btn--block consult__btn" href="weixin://">
        微信咨询 <ArrowRight size={15} />
      </a>
      <p className="consult__phone">
        或 <a href={`tel:${shop.phone}`}>电话咨询 {shop.phone}</a>
      </p>
    </div>
  );
}

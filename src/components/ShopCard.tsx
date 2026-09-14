import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Photo } from "./Photo";
import { shop } from "../data/services";

export function ShopCard() {
  return (
    <section className="shop-card">
      <p className="shop-card__eyebrow">Local Service</p>
      <h1 className="shop-card__title">
        附近生活
        <br />
        方便就好
      </h1>

      <Photo label="店铺照片" />

      <p className="shop-card__meta">{shop.community}</p>
      <p className="shop-card__tags">{shop.tags.join(" · ")}</p>

      <div className="shop-card__nearby">
        <span className="shop-card__nearby-label">靠近</span>
        {shop.nearby.map((n) => (
          <span key={n} className="tag-pill">
            {n}
          </span>
        ))}
      </div>

      <div className="shop-card__actions">
        <a className="btn btn--outline" href="#consult">
          <MapPin size={16} /> 到这里
        </a>
        <a className="btn btn--solid" href={`tel:${shop.phone}`}>
          <Phone size={16} /> 联系我们
        </a>
      </div>

      <a className="shop-card__wechat" href="weixin://">
        微信咨询 <ArrowRight size={14} />
      </a>
    </section>
  );
}

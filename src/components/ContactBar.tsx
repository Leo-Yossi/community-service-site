import { shop } from "../data/services";

export function ContactBar() {
  return (
    <div className="contact-bar">
      <a href={`tel:${shop.phone}`}>电话</a>
      <a href="weixin://">微信</a>
    </div>
  );
}

import { Photo } from "./Photo";
import type { ServiceCase } from "../types/service";

export function CaseCompare({ item }: { item: ServiceCase }) {
  return (
    <div className="case">
      <div className="case__photos">
        <div className="case__photo">
          <span className="case__label">{item.beforeLabel ?? "修改前"}</span>
          <Photo label="修改前照片" />
        </div>
        <div className="case__arrow">↓</div>
        <div className="case__photo">
          <span className="case__label">{item.afterLabel ?? "修改后"}</span>
          <Photo label="修改后照片" />
        </div>
      </div>
      <h3 className="case__title">改了哪里？</h3>
      <p className="case__note">{item.note}</p>
    </div>
  );
}

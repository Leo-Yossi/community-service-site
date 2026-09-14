import { Photo } from "./Photo";
import type { StyleOption } from "../types/service";

export function StyleBoard({ styles }: { styles: StyleOption[] }) {
  return (
    <div className="style-board">
      <h3 className="style-board__title">可以做这些</h3>
      <div className="style-grid">
        {styles.map((s) => (
          <div className="style-panel" key={s.id}>
            <Photo label={s.title} />
            <p className="style-panel__title">{s.title}</p>
            <p className="style-panel__desc">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

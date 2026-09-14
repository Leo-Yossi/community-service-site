import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="wrap notfound">
      <h1>没有找到这个页面</h1>
      <p>页面可能已移动，或地址有误。</p>
      <Link className="back-link" to="/">
        ← 返回首页
      </Link>
    </div>
  );
}

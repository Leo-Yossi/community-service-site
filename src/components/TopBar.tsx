import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <header className="topbar">
      <div className="wrap topbar__inner">
        <Link to="/" className="topbar__brand">附近生活</Link>
        <a className="topbar__link" href="#consult">联系咨询</a>
      </div>
    </header>
  );
}

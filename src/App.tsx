import { Outlet, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { ContactBar } from "./components/ContactBar";
import { Home } from "./pages/Home";
import { ServiceDetail } from "./pages/ServiceDetail";
import { ItemDetail } from "./pages/ItemDetail";
import { NotFound } from "./pages/NotFound";

function Layout() {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
      <footer className="footer">© 2026 附近生活 · 线下咨询为主</footer>
      <ContactBar />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/service/:serviceId/:itemId" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

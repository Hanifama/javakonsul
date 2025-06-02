import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/_shared/scrollTotopfunct";
import routes from "./routes";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

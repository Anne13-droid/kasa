import "./style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import APropos from "./Pages/Apropos/APropos";
import NotFound from "./Pages/NotFound/notFound";
import Logements from "./Pages/Logement/logements";
import Layout from "./Layout/Layout";

function Router() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/logements/:logementId" element={<Logements />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default Router;

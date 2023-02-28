import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Apropos from "./Pages/A propos/APropos";
import NotFound from "./Pages/NotFound/notFound";
import Logements from "./Pages/Logement/logements";
import Layout from "./Layout/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/a_propos" element={<Apropos />} />
                    <Route
                        path="/logements/:logementId"
                        element={<Logements />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}
export default App;

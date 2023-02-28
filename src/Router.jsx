import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Apropos from "./Pages/A propos/APropos";
import NotFound from "./Pages/NotFound/notFound";
import Logements from "./Pages/Logement/logements";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a_propos" element={<Apropos />} />
                <Route path="/logements/:logementId" element={<Logements />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
export default App;

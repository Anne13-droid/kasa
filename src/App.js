import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Body";
import Apropos from "./Pages/A propos/APropos";
import Header from "./Layout/Header/Navbar";
import Footer from "./Layout/Footer/Footer";
import NotFound from "./Pages/NotFound/notFound";
import Cards from "./Components/Cards/cards";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/a_propos" element={<Apropos />} />
                {/* <Route path="/cards" element={<Cards />} /> */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Cards />
            <Footer />
        </div>
    );
}
export default App;

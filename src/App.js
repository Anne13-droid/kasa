import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Body/Body";
import Apropos from "./A propos/APropos";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";
// import Cards from "./Home/Cards/Cards";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Home />} />

                <Route path="/a_propos" element={<Apropos />} />
                <Route path="/" element={<Home />} />
                {/* <Route path="/cards" element={<Cards />} /> */}
                {/* <Route path="/*" element={<NotFound />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}
export default App;

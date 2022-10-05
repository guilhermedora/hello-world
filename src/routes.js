import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About"
import Skills from "./pages/Skills";

export default function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/habilidades" element={<Skills />} />
        </Routes>
    );
}
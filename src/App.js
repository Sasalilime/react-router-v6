import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Infos from "./pages/Infos";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="infos" element={<Infos />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

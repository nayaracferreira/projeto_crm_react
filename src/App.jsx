import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Entrar from "./components/pages/Entrar";
import Cadastro from "./components/pages/Cadastro";
import Agenda from "./components/pages/Agenda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

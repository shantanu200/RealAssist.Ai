import { Routes, Route } from "react-router-dom";
import PDF from "./pages/PDF";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/pdf/:start/:end" element={<PDF />} />
    </Routes>
  );
}

export default App;

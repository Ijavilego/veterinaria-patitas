import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Patient from "./pages/Patient";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient" element={<Patient />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Catalog from "./Catalog";
import DogDetails from "./DogDetails";
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/dog/:dogId" element={<DogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

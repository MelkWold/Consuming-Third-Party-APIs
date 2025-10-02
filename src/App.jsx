import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import PeoplePage from "./pages/PeoplePage";
import StarshipPage from "./pages/StarshipPage";
import PlanetPage from "./pages/PlanetsPage";

// Components
import NavBar from "./components/Nav/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<PeoplePage />} />
        <Route path="/starships" element={<StarshipPage />} />
        <Route path="/planets" element={<PlanetPage />} />
      </Routes>
    </>
  );
}

export default App;
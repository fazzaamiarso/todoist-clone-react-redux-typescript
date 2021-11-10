import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Shared/Navigation";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

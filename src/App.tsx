import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

const App: React.FC = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/dashboard" />
      </Routes>
    </>
  );
};

export default App;

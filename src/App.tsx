import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Shared/Navigation";
import Home from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox";

const App: React.FC = () => {
  return (
    <Navigation>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </>
    </Navigation>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Shared/Navigation";
import Home from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox";
import Project from "./Pages/Project";

const App: React.FC = () => {
  return (
    <Navigation>
      <>
        <Routes>
          <Route path="/app/inbox" element={<Inbox />} />
        </Routes>
        <Routes>
          <Route path="/project/:projectId" element={<Project />} />
        </Routes>
      </>
    </Navigation>
  );
};

export default App;

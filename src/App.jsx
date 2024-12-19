import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/app" element={<Navigate to="/projects" />} />
          <Route path="/" element={<Navigate to="/projects" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

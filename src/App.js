import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

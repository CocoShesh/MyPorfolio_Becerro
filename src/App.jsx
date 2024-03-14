import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repository from "./components/pages/Repository";
import Home from "./components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repository" element={<Repository />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

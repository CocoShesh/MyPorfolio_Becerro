import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repository from "./components/pages/Repository";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Songs from "./components/pages/Songs";
import JobExposure from "./components/pages/JobExposure";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/repository" element={<Repository />} /> */}
            <Route path="/songs" element={<Songs />} />
            {/* <Route path="/job-exposure" element={<JobExposure />} /> */}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

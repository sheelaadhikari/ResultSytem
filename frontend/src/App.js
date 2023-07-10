import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./pages/Upload.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import ResultPage from "./pages/ResultPage.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/result" element={<ResultPage />} />

          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

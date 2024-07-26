import { useEffect } from "react";
import { Header } from "./components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from "react";
import { Footer, Header } from "./components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

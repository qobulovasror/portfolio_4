import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/menu";
import Loading from "./pages/load/loading";
import "./pages/assets/style.css";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Resume = lazy(() => import("./pages/resume"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));
function App() {
  const [menu, setMenu] = useState(false);
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className="main row">
          <Menu menu={menu} />
          <div className="pageBody">
            <div className="mobileStyle">
              <div className="menu-icon">
                <div onClick={() => setMenu(true)}>M</div>
              </div>
              <div
                className="menu-back"
                style={{ display: menu ? "block" : "none" }}
                onClick={() => setMenu(false)}
              ></div>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

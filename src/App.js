import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Manuwa</h1>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="about">
            <button>About</button>
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

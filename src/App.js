import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Todos from "./Todos";
import About from "./About";
import Contact from "./Contact";
import ErrorBoundary from "./ErrorBoundary";

const routes = [
  { path: "/todos", title: "Todos", element: <Todos /> },
  { path: "/about", title: "About this app", element: <About /> },
  { path: "/contact", title: "Contact", element: <Contact /> },
];

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <nav style={{ display: "flex", justifyContent: "space-around" }}>
            {routes.map((route) => (
              <Link key={route.path} to={route.path}>
                <button style={{ padding: "5px 10px", margin: "0 5px" }}>
                  {route.title}
                </button>
              </Link>
            ))}
          </nav>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
          <footer>
            <p>Copyright © 2024 EA-HUB Todo App</p>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

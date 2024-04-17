import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todos from "./Todos";
import About from "./About";
import Contact from "./Contact";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  const routes = [
    { path: "/todos", element: <Todos /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ];

  return (
    <ErrorBoundary>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/todos">Todos</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
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
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

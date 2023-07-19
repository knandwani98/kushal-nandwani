import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("currentTheme");
    return currentTheme ? currentTheme : "dark";
  });

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme !== "dark" ? "dark" : "light";
      localStorage.setItem("currentTheme", newTheme);
      return newTheme;
    });
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Home theme={theme} />
          </Route>
          <Route path="/about">
            <About theme={theme} />
          </Route>
          <Route path="/projects">
            <Projects theme={theme} />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

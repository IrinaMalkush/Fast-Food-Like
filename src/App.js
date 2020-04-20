import React from "react";
import "./App.css";
import { PageHeader } from "./components/PageHeader";
import { NavigationMenu } from "./components/NavigationMenu";
import { PageFooter } from "./components/PageFooter";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <header className="header">
          <PageHeader />
        </header>

        <NavigationMenu />

        <footer className="footer">
          <PageFooter />
        </footer>
      </div>
    </div>
  );
}

export default App;

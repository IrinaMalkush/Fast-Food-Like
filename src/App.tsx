import * as React from "react";

import styles from "./App.module.css";
import { PageFooter } from "./components/footer/PageFooter";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/Navigation";
import theme from "./styles/theme.module.css";

function App() {
  return (
    // <div className={classNames(styles.App, theme.light)}>
    <div className={theme.light}>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Header />
        </header>

        <Navigation />

        <footer className={styles.footer}>
          <PageFooter />
        </footer>
      </div>
    </div>
  );
}

export default App;

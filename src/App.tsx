import * as React from "react";
import styles from "./App.module.css";
import { Header } from "./pages/header/Header";
import { NavigationMenu } from "./pages/navigation/NavigationMenu";
import { PageFooter } from "./pages/footer/PageFooter";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Header />
        </header>

        <NavigationMenu />

        <footer className={styles.footer}>
          <PageFooter />
        </footer>
      </div>
    </div>
  );
}

export default App;

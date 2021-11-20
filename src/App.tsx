import * as React from "react";
import styles from "./App.module.css";
import theme from "./styles/theme.module.css";
import classNames from "classnames";
import { Header } from "./pages/header/Header";
import { NavigationMenu } from "./pages/navigation/NavigationMenu";
import { PageFooter } from "./pages/footer/PageFooter";
import { useState } from "react";

function App() {
  const [currentTheme, setTheme] = useState(theme.light);

  return (
    <div className={classNames(styles.App, currentTheme)}>
      <div className={styles.layout}>
        {/*        <button onClick={() => setTheme(currentTheme === theme.light ? theme.dark : theme.light)}>
          click me!
        </button>*/}
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

import * as React from 'react';
import './App.css';
import { Header } from './pages/header/Header';
import { NavigationMenu } from './pages/navigation/NavigationMenu';
import { PageFooter } from './pages/footer/PageFooter';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <header className="header">
          <Header />
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

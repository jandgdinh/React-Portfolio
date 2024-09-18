import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SplashScreen from './components/SplashScreen';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Display the splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <>
      <header>
        <h1>John Dinh | Full Stack Developer</h1>
      </header>
      <Nav  />
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 John Dinh</p>
        <div className="footer-links">
          <a href="https://github.com/jandgdinh" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/koukijohn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://twitter.com/thejohndinh" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
     </footer>
    </>
  );
}

export default App;

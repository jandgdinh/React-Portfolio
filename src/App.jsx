// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
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

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

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
     </footer>
    </>
  );
}

export default App;

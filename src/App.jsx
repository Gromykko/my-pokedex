import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <nav style={{ padding: '20px', background: '#333', color: 'white', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Pokédex</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      </nav>

      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
import styles from './App.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page-2/" element={<Page2 />} />
        <Route path="/Page-3/" element={<Page3 />} />
        <Route path="/Page-4/" element={<Page4 />} />
      </Routes>
      <div className={styles.buttonContainer}>
        <NavLink className={(navData) => navData.isActive ? styles.selected : ''} to="/">
          <button>Page 1</button>
        </NavLink>
        <NavLink className={(navData) => navData.isActive ? styles.selected : ''} to="/Page-2/">
          <button>Page 2</button>
        </NavLink>
        <NavLink className={(navData) => navData.isActive ? styles.selected : ''} to="/Page-3/">
          <button>Page 3</button>
        </NavLink>
        <NavLink className={(navData) => navData.isActive ? styles.selected : ''} to="/Page-4/">
          <button>Page 4</button>
        </NavLink>
      </div>
    </div>
  )
}

export default App

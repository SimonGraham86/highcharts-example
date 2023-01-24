import styles from './App.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page-2/" element={<Page2 />} />
      </Routes>
      <div className={styles.buttonContainer}>
        <NavLink className={(navData) => navData.isActive ? styles.selected : ''} to="/">
          <button>Page 1</button>
        </NavLink>
        <NavLink className={(navData) => navData.isActive ? styles.selected : ''} to="/Page-2/">
          <button>Page 2</button>
        </NavLink>
      </div>
    </div>
  )
}

export default App

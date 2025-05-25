// src/components/App.jsx
import styles from '../styles/App.module.css';
import DashboardMainContent from './DashboardMainContent';
import Header from './Header';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appBody}>
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
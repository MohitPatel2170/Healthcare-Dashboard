// src/components/DashboardOverview.jsx
import styles from '../styles/DashboardOverview.module.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const DashboardOverview = () => {
  return (
    <div className={styles.dashboardOverview}>
      <div className={styles.anatomyHealthSection}>
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default DashboardOverview;
// src/components/DashboardMainContent.jsx
import styles from '../styles/DashboardMainContent.module.css';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import DashboardOverview from './DashboardOverview';
import UpcomingSchedule from './UpcomingSchedule';

const DashboardMainContent = () => {
  return (
    <main className={styles.dashboardMain}>
      <div className={styles.dashboardHeader}>
        <h2 className={styles.dashboardTitle}>Dashboard</h2>
      </div>
      
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardLeft}>
          <DashboardOverview />
          <ActivityFeed />
        </div>
        
        <div className={styles.dashboardRight}>
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
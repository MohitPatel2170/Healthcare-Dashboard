// src/components/DashboardMainContent.jsx
import { ArrowRight, ChevronDown } from 'lucide-react';
import styles from '../styles/DashboardMainContent.module.css';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import DashboardOverview from './DashboardOverview';
import UpcomingSchedule from './UpcomingSchedule';

const DashboardMainContent = () => {
  return (
    <main className={styles.dashboardMain}>
      <div className={styles.dashboardHeader}>
       <h2 className={styles.dashboardTitle}>
  Dashboard
  <span className={styles.thisWeek}>
    This Week
    <ChevronDown size={16} />
  </span>
</h2>
      </div>
      
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardLeft}>
            
          <DashboardOverview />
          <div className={styles.bottomRightText}>
            <span>Details</span>
            <ArrowRight size={16} />
          </div>
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
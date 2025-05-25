
// src/components/ActivityFeed.jsx
import { activityData } from '../data/calendarData';
import styles from '../styles/ActivityFeed.module.css';

const ActivityFeed = () => {
  return (
    <div className={styles.activityFeed}>
      <div className={styles.activityHeader}>
        <h3 className={styles.activityTitle}>Activity</h3>
        <p className={styles.activitySubtitle}>3 appointments on this week</p>
      </div>
      
      <div className={styles.activityChart}>
        <div className={styles.chartBars}>
          {activityData.map((data, index) => (
            <div key={index} className={styles.chartBar}>
              <div 
                className={styles.barFill} 
                style={{ height: `${data.value}%` }}
              />
            </div>
          ))}
        </div>
        
        <div className={styles.chartDays}>
          {activityData.map((data, index) => (
            <div key={index} className={styles.chartDay}>
              {data.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
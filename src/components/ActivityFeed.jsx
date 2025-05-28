// src/components/ActivityFeed.jsx
import { activityData } from '../data/calendarData';
import styles from '../styles/ActivityFeed.module.css';

const ActivityFeed = () => {
  // Debug: Check if data is loading
  console.log('Activity Data:', activityData);
  
  // Pattern matching the reference image more closely
  const testData = [
    {
      day: 'Mon',
      bars: [
        { height: 100, type: 'primary' },
        { height: 65, type: 'secondary' },
        { height: 45, type: 'primary' },
        { height: 35, type: 'secondary' }
      ]
    },
    {
      day: 'Tues',
      bars: [
        { height: 100, type: 'secondary' },
        { height: 65, type: 'primary' },
        { height: 45, type: 'secondary' },
        { height: 35, type: 'primary' }
      ]
    },
    {
      day: 'Wed',
      bars: [
        { height: 100, type: 'primary' },
        { height: 65, type: 'secondary' }, 
        { height: 45, type: 'primary' },
        { height: 35, type: 'secondary' }
      ]
    },
    {
      day: 'Thurs',
      bars: [
        { height: 100, type: 'secondary' },
        { height: 65, type: 'primary' },
        { height: 45, type: 'secondary' },
         { height: 35, type: 'primary' }
        
      ]
    },
    {
      day: 'Fri',
      bars: [
        { height: 100, type: 'primary' },
        { height: 65, type: 'secondary' },
        { height: 45, type: 'primary' },
        { height: 35, type: 'secondary' }
      ]
    },
    {
      day: 'Sat',
      bars: [
        { height: 100, type: 'secondary' },
        { height: 65, type: 'primary' },
        { height: 45, type: 'secondary' },
         { height: 35, type: 'secondary' }
      ]
    },
    {
      day: 'Sun',
      bars: [
        { height: 100, type: 'primary' },
        { height: 65, type: 'secondary' },
        { height: 45, type: 'primary' },
         { height: 35, type: 'secondary' }
      ]
    }
  ];

  return (
    <div className={styles.activityFeed}>
      <div className={styles.activityHeader}>
        <h3 className={styles.activityTitle}>Activity</h3>
        <p className={styles.activitySubtitle}>3 appointment on this week</p>
      </div>
      
      <div className={styles.activityChart}> 
        <div className={styles.chartBars}> 
          {testData.map((dayData, dayIndex) => ( 
            <div key={dayIndex} className={styles.dayGroup}> 
              {dayData.bars.map((bar, barIndex) => (
                <div key={barIndex} className={styles.chartBar}> 
                  <div  
                    className={`${styles.barFill} ${bar.type === 'primary' ? styles.primary : styles.secondary}`}
                    style={{ 
                      height: `${bar.height}%`,
                      backgroundColor: bar.type === 'primary' ? '#22d3ee' : '#6366f1' // Fallback colors
                    }} 
                  /> 
                </div> 
              ))}
            </div> 
          ))} 
        </div> 
        
        <div className={styles.chartDays}> 
          {testData.map((dayData, index) => ( 
            <div key={index} className={styles.chartDay}> 
              {dayData.day} 
            </div> 
          ))} 
        </div> 
      </div> 
    </div> 
  ); 
};

export default ActivityFeed;
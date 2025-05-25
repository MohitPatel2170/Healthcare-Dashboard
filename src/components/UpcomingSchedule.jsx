
// src/components/UpcomingSchedule.jsx
import { upcomingSchedule } from '../data/upcomingAppointments';
import styles from '../styles/UpcomingSchedule.module.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className={styles.upcomingSchedule}>
      <h3 className={styles.scheduleTitle}>The Upcoming Schedule</h3>
      
      <div className={styles.scheduleDay}>
        <h4 className={styles.dayTitle}>On Thursday</h4>
        <div className={styles.dayAppointments}>
          {upcomingSchedule.thursday.map((appointment) => (
            <SimpleAppointmentCard 
              key={appointment.id} 
              {...appointment} 
            />
          ))}
        </div>
      </div>
      
      <div className={styles.scheduleDay}>
        <h4 className={styles.dayTitle}>On Saturday</h4>
        <div className={styles.dayAppointments}>
          {upcomingSchedule.saturday.map((appointment) => (
            <SimpleAppointmentCard 
              key={appointment.id} 
              {...appointment} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
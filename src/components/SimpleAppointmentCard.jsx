
// src/components/SimpleAppointmentCard.jsx
import styles from '../styles/SimpleAppointmentCard.module.css';

const SimpleAppointmentCard = ({ 
  title, 
  time, 
  icon, 
  backgroundColor, 
  textColor, 
  doctor 
}) => {
  return (
    <div 
      className={styles.simpleAppointmentCard}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.cardLeft}>
        <div className={styles.appointmentIcon}>{icon}</div>
        <div className={styles.appointmentInfo}>
          <h5 className={styles.appointmentTitle} style={{ color: textColor }}>
            {title}
          </h5>
          <p className={styles.appointmentTime} style={{ color: textColor }}>
            {time}
          </p>
          {doctor && (
            <p className={styles.appointmentDoctor} style={{ color: textColor }}>
              {doctor}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
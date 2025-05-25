
// src/components/HealthStatusCards.jsx
import { healthStatusData } from '../data/healthCards';
import styles from '../styles/HealthStatusCards.module.css';

const HealthStatusCards = () => {
  return (
    <div className={styles.healthStatusCards}>
      {healthStatusData.map((item) => (
        <div key={item.id} className={styles.healthCard}>
         
          
          <div className={styles.healthCardContent}>
            <div className={styles.organHeader}>
             <div className={styles.healthCardIcon} style={{ color: item.color }}>
        {item.icon}
      </div>  
            <h4 className={styles.organName}>{item.organ}</h4>
            </div>
            <p className={styles.healthDate}>Date: {item.date}</p>
            
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ 
                  backgroundColor: item.color,
                  width: `${item.progress}%`
                }}
              />
            </div>
          </div>
          
         
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
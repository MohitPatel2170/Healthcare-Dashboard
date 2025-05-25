
// src/components/AnatomySection.jsx
import { Heart } from 'lucide-react';
import humanAnatomy from '../assets/humanAnatomy.webp';
import styles from '../styles/AnatomySection.module.css';
const AnatomySection = () => {
  return (
    <div className={styles.anatomySection}>
      <div className={styles.anatomyContainer}>
        <div className={styles.humanBodyCard}>
          <div className={styles.cardContent}>
            {/* Replace this img src with your actual human body image */}
            <img 
              src={humanAnatomy}
              alt="Human Body Anatomy" 
              className={styles.bodyImage}
            />
            
            {/* Heart Health Indicator */}
            <div className={styles.healthIndicator} data-position="heart">
              <div className={styles.indicatorBadge}>
                <Heart size={16} fill="#ff4757" color="#ff4757" />
                <span>Healthy Heart</span>
              </div>
            </div>
            
            {/* Leg Health Indicator */}
            <div className={styles.healthIndicator} data-position="leg">
              <div className={styles.indicatorBadge}>
                <span>Healthy Leg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
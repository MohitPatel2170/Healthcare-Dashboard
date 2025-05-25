
// src/components/CalendarView.jsx
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { appointmentCards, calendarData } from '../data/calendarData';
import styles from '../styles/CalendarView.module.css';

const CalendarView = () => {
  return (
    <div className={styles.calendarView}>
      <div className={styles.calendarHeader}>
        <div className={styles.dateSelector}>
         
          <h3 className={styles.monthYear}>{calendarData.month}</h3>
        </div>
        
        <div className={styles.calendarNav}>
          <button className={styles.navButton}>
            <ChevronLeft size={20} />
          </button>
          <button className={styles.navButton}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className={styles.calendarGrid}>
        <div className={styles.calendarDaysHeader}>
          {calendarData.days.map(day => (
            <div key={day} className={styles.dayHeader}>{day}</div>
          ))}
        </div>
        
        <div className={styles.calendarDates}>
          {calendarData.dates.map((date) => (
            <div 
              key={date.day} 
              className={`${styles.calendarDate} ${date.highlighted ? styles.highlighted : ''}`}
            >
              <div className={styles.dateNumber}>{date.day}</div>
              <div className={styles.dateAppointments}>
                {date.appointments.map((time, timeIndex) => (
                  <div key={timeIndex} className={styles.appointmentTime}>
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.appointmentCards}>
        {appointmentCards.map((card) => (
          <div 
            key={card.id} 
            className={styles.appointmentCard}
            style={{ backgroundColor: card.backgroundColor, color: card.textColor }}
          >
            <div className={styles.cardIcon}>{card.icon}</div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardTime}>{card.time}</p>
              <p className={styles.cardDoctor}>{card.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
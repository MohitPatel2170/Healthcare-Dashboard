
// src/data/calendarData.js

export const calendarData = {
  month: 'October 2021',
  currentWeek: 'This Week',
  days: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  dates: [
    {
      day: 25,
      dayName: 'Mon',
      appointments: ['10:00', '11:00', '12:00']
    },
    {
      day: 26,
      dayName: 'Tues',
      appointments: ['08:00', '09:00', '10:00'],
      
    },
    {
      day: 27,
      dayName: 'Wed',
      appointments: ['12:00','---', '13:00']
    },
    {
      day: 28,
      dayName: 'Thurs',
      appointments: ['10:00', '11:00','---']
    },
    {
      day: 29,
      dayName: 'Fri',
      appointments: ['---','14:00', '16:00']
    },
    {
      day: 30,
      dayName: 'Sat',
      appointments: ['12:00', '14:00', '15:00'],
     
    },
    {
      day: 31,
      dayName: 'Sun',
      appointments: ['09:00', '10:00', '11:00']
    }
  ]
};

export const appointmentCards = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷',
    backgroundColor: '#dde2f9',
    textColor: '#100b8b'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '💪',
    backgroundColor: '#dde2f9',
    textColor: '#100b8b'
    
  }
];

export const activityData = [
  { day: 'Mon', value: 40 },
  { day: 'Tues', value: 80 },
  { day: 'Wed', value: 30 },
  { day: 'Thurs', value: 60 },
  { day: 'Fri', value: 90 },
  { day: 'Sat', value: 45 },
  { day: 'Sun', value: 70 }
];
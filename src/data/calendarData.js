
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

export const activityData =  [
  {
    day: 'Mon',
    bars: [
      { height: 30, type: 'primary' },
      { height: 45, type: 'secondary' }
    ]
  },
  {
    day: 'Tues',
    bars: [
      { height: 25, type: 'secondary' },
      { height: 70, type: 'primary' },
      { height: 55, type: 'secondary' },
      { height: 40, type: 'primary' }
    ]
  },
  {
    day: 'Wed',
    bars: [
      { height: 35, type: 'primary' },
      { height: 20, type: 'secondary' }
    ]
  },
  {
    day: 'Thurs',
    bars: [
      { height: 40, type: 'secondary' },
      { height: 25, type: 'primary' },
      { height: 50, type: 'secondary' }
    ]
  },
  {
    day: 'Fri',
    bars: [
      { height: 35, type: 'primary' },
      { height: 80, type: 'secondary' },
      { height: 45, type: 'primary' },
      { height: 60, type: 'secondary' }
    ]
  },
  {
    day: 'Sat',
    bars: [
      { height: 30, type: 'secondary' },
      { height: 55, type: 'primary' },
      { height: 25, type: 'secondary' }
    ]
  },
  {
    day: 'Sun',
    bars: [
      { height: 40, type: 'primary' },
      { height: 35, type: 'secondary' },
      { height: 65, type: 'primary' }
    ]
  }
];
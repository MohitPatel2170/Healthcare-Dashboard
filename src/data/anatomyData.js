
// src/data/anatomyData.js

export const anatomyIndicators = [
  {
    id: 1,
    name: 'Healthy Heart',
    position: { top: '25%', left: '45%' },
    status: 'healthy',
    color: '#ff4757'
  },
  {
    id: 2,
    name: 'Healthy Leg',
    position: { top: '75%', left: '40%' },
    status: 'healthy',
    color: '#2ed573'
  }
];

export const bodyParts = {
  heart: {
    position: { top: '25%', left: '45%' },
    status: 'healthy'
  },
  lungs: {
    position: { top: '20%', left: '35%' },
    status: 'attention'
  },
  leg: {
    position: { top: '75%', left: '40%' },
    status: 'healthy'
  }
};
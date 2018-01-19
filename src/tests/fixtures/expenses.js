import moment from 'moment';

export default [
  {
    id: '1',
    description: 'stuff',
    note: '',
    amount: 1000,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'rent',
    note: '',
    amount: 102400,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
  {
    id: '3',
    description: 'gas',
    note: '',
    amount: 6500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
];

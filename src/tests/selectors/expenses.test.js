import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'stuff',
    note: '',
    amount: 1000,
    createdAt: 0,
  },
  {
    id: '1',
    description: 'rent',
    note: '',
    amount: 102400,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
  {
    id: '1',
    description: 'gas',
    note: '',
    amount: 6500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1]]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

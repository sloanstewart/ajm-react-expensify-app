import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

test('should gen set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0),
  });
});

test('should gen set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0),
  });
});

test('should gen set text filter action object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should gen set text filter action object', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test',
  });
});

test('should gen sort by date action object', () => {
  const action = sortByDate(moment(0));
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('should gen sort by amount action object', () => {
  const action = sortByAmount(1000);
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

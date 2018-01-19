import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

test('should gen set start date action object', () => {
  const action = setStateDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should gen set end date action object', () => {
  const action = setEndDate(momen(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0);
  });
});

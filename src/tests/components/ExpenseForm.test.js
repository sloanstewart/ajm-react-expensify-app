import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submisison', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'new shit';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value },
    });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'new shit';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('textarea')
    .at(0)
    .simulate('change', {
      target: { value },
    });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change', () => {
  const value = '19.95';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value },
    });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invaled input change', () => {
  const value = '19.95000';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value },
    });
  expect(wrapper.state('amount')).toBe('');
});

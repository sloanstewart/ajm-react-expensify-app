import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: state.count = 0
      };
    default:
      return state;
  }

});

console.log(store.getState());

// Actions
// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT',
});

// Reset count 

store.dispatch({
  type: 'RESET',
});

// I'd like to reset the count to zero

store.dispatch({
  type: 'DECREMENT',
});


console.log(store.getState());
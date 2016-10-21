// Action types
const amountTypes = { 'SAW_CATS': 'SAW_CATS' };

// Reducer
function amountReducer(state, action) {
  switch (action.type) {
    case amountTypes.SAW_CATS:
      return {
        amount: state.amount + action.amount
      };

    default:
      return state;
  }
}

// Action creator
function sawCats(amount) {
  return {
    type: amountTypes.SAW_CATS,
    amount
  };
}

const state = { amount: 0 };
const store = amountReducer(state, {});
console.log(store); // { amount: 0 }
console.log(amountReducer(store, sawCats(1))); // { amount: 1 }

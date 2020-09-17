const reducerDeleteItem = (
  state = {
    id: 0,
  },
  action,
) => {
  switch (action.type) {
  case 'DELETEITEM':
    return { ...state, id: action.payload };
  default:
    return state;
  }
};

export default reducerDeleteItem;

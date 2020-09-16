const reducerViewData = (
  state = { currentData: [] },
  action,
) => {
  switch (action.type) {
  case 'setViewData':
    return { currentData: action.payload };
  default:
    return state;
  }
};

export default reducerViewData;

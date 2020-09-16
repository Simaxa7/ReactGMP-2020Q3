const setViewData = (data) => (dispatch) => {
  dispatch({ type: 'setViewData', payload: data });
};

export default setViewData;

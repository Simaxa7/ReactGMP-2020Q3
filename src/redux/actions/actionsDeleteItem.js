const deleteItem = (data) => (dispatch) => {
  dispatch({ type: 'DELETEITEM', payload: data });
};

export default deleteItem;

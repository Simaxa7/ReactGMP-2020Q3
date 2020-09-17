export const setQuerryGenre = (setValueGenre) => (dispatch) => {
  dispatch({ type: 'SETQUERRYGENRE', payload: setValueGenre });
};

export const setQuerrySort = (setValueSort) => (dispatch) => {
  dispatch({ type: 'SETQUERRYSORT', payload: setValueSort });
};

export const setQuerrySearch = (setValueSearch) => (dispatch) => {
  dispatch({ type: 'SETQUERRYSERCH', payload: setValueSearch });
};

export const setItemActive = (options) => (dispatch) => {
  dispatch({ type: 'SETITEMACTIVE', payload: options });
};

export const setActiveData = ({ data }) => (dispatch) => {
  dispatch({ type: 'SETACTIVEDATA', payload: data });
};

export const itemNoActive = () => (dispatch) => {
  dispatch({ type: 'ITEMNOACTIVE' });
};

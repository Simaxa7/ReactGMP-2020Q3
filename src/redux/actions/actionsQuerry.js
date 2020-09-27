export const setQuerryGenre = (setValueGenre) => (dispatch) => {
  dispatch({ type: 'SET_QUERRY_GENRE', payload: setValueGenre });
};

export const setQuerrySort = (setValueSort) => (dispatch) => {
  dispatch({ type: 'SET_QUERRY_SORT', payload: setValueSort });
};

export const setQuerrySearch = (setValueSearch) => (dispatch) => {
  dispatch({ type: 'SET_QUERRY_SERCH', payload: setValueSearch });
};

export const setItemActive = (options) => (dispatch) => {
  dispatch({ type: 'SET_ITEM_ACTIVE', payload: options });
};

export const setActiveData = ({ data }) => (dispatch) => {
  dispatch({ type: 'SET_ACTIVE_DATA', payload: data });
};

export const itemNoActive = () => (dispatch) => {
  dispatch({ type: 'ITEM_NO_ACTIVE' });
};

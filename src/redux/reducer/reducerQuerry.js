const reducerQuer = (
  state = {
    qGenre: '',
    qSort: '',
    qSearch: '',
    itemActive: '',
    itemActiveData: [],
  },
  action,
) => {
  switch (action.type) {
  case 'SET_QUERRY_GENRE':
    return { ...state, qGenre: action.payload };
  case 'SET_QUERRY_SORT':
    return { ...state, qySort: action.payload };
  case 'SET_QUERRY_SERCH':
    return { ...state, qSerch: action.payload };
  case 'SET_ITEM_ACTIVE':
    return {
      ...state,
      itemActive: action.payload.id,
      itemActiveData: action.payload.data,
    };
  case 'SET_ACTIVE_DATA':
    return { ...state, itemActiveData: action.payload };
  case 'ITEM_NO_ACTIVE':
    return { ...state, itemActive: '' };
  default:
    return state;
  }
};

export default reducerQuer;

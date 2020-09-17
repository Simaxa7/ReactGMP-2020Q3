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
  case 'SETQUERRYGENRE':
    return { ...state, qGenre: action.payload };
  case 'SETQUERRYSORT':
    return { ...state, qySort: action.payload };
  case 'SETQUERRYSERCH':
    return { ...state, qSerch: action.payload };
  case 'SETITEMACTIVE':
    return {
      ...state,
      itemActive: action.payload.id,
      itemActiveData: action.payload.data,
    };
  case 'SETACTIVEDATA':
    return { ...state, itemActiveData: action.payload };
  case 'ITEMANOCTIVE':
    return { ...state, itemActive: '' };
  default:
    return state;
  }
};

export default reducerQuer;

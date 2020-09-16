const reducerGenre = (
  state = {
    genreType: 'FILMGENREALL',
    genreSort: { data: [] },
  },
  action,
) => {
  switch (action.type) {
  case 'FILMGENREALL':
    return { genreType: 'FILMGENREALL', genreSort: action.payload };
  case 'FILMGENREDOCUMENTARY':
    return { genreType: 'FILMGENREDOCUMENTARY', genreSort: action.payload };
  case 'FILMGENRECOMEDY':
    return { genreType: 'FILMGENRECOMEDY', genreSort: action.payload };
  case 'FILMGENREHORROR':
    return { genreType: 'FILMGENREHORROR', genreSort: action.payload };
  case 'FILMGENRECRIME':
    return { genreType: 'FILMGENRECRIME', genreSort: action.payload };
  default:
    return state;
  }
};

export default reducerGenre;

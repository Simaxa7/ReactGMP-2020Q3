const reducerGenre = (
  state = {
    genreType: 'FILM_GENRE_ALL',
    genreSort: { data: [] },
  },
  action,
) => {
  switch (action.type) {
  case 'FILM_GENRE_ALL':
    return { genreType: 'FILM_GENRE_ALL', genreSort: action.payload };
  case 'FILM_GENRE_DOCUMENTARY':
    return { genreType: 'FILM_GENRE_DOCUMENTARY', genreSort: action.payload };
  case 'FILM_GENRE_COMEDY':
    return { genreType: 'FILM_GENRE_COMEDY', genreSort: action.payload };
  case 'FILM_GENRE_HORROR':
    return { genreType: 'FILM_GENRE_HORROR', genreSort: action.payload };
  case 'FILM_GENRE_CRIME':
    return { genreType: 'FILM_GENRE_CRIME', genreSort: action.payload };
  default:
    return state;
  }
};

export default reducerGenre;

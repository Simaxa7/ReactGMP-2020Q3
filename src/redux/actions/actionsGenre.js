const baseUrl = 'http://localhost:4000/movies';
const baseSearchUrl = 'http://localhost:4000/movies?searchBy=genres&filter=';
const initGet = { method: 'GET' };
const initDel = { method: 'DELETE' };

export const filmGenreAll = () => async (dispatch) => {
  dispatch({ type: 'SETQUERRYGENRE', payload: 'All' });
  const res = await fetch(`${baseUrl}`, initGet);
  const body = await res.json();
  dispatch({ type: 'FILMGENREALL', payload: body });
};

export const filmGenreDocumentary = () => async (dispatch) => {
  dispatch({ type: 'SETQUERRYGENRE', payload: 'documentary' });

  const res = await fetch(`${baseSearchUrl}documentary`, initGet);
  const body = await res.json();
  dispatch({ type: 'FILMGENREDOCUMENTARY', payload: body });
};

export const filmGenreComedy = () => async (dispatch) => {
  dispatch({ type: 'SETQUERRYGENRE', payload: 'comedy' });

  const res = await fetch(`${baseSearchUrl}comedy`, initGet);
  const body = await res.json();
  dispatch({ type: 'FILMGENRECOMEDY', payload: body });
};

export const filmGenreHorror = () => async (dispatch) => {
  dispatch({ type: 'SETQUERRYGENRE', payload: 'horror' });

  const res = await fetch(`${baseSearchUrl}horror`, initGet);
  const body = await res.json();
  dispatch({ type: 'FILMGENREHORROR', payload: body });
};

export const filmGenreCrime = () => async (dispatch) => {
  dispatch({ type: 'SETQUERRYGENRE', payload: 'crime' });

  const res = await fetch(`${baseSearchUrl}crime`, initGet);
  const body = await res.json();
  dispatch({ type: 'FILMGENRECRIME', payload: body });
};

export const deleteItem = ({ id, options }) => async (dispatch) => {
  await fetch(`${baseUrl}/${id}`, initDel);
  switch (options.qGenre) {
  case 'All':
    dispatch(filmGenreAll());
    break;
  case 'documentary':
    dispatch(filmGenreDocumentary());
    break;
  case 'comedy':
    dispatch(filmGenreComedy());
    break;
  case 'horror':
    dispatch(filmGenreHorror());
    break;
  case 'crime':
    dispatch(filmGenreCrime());
    break;
  default: console.log('hi2');
  }
};

export const addItem = ({ options, item }) => async (dispatch) => {
  await fetch(
    `${baseUrl}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'text/plain; charset=UTF-8',
      },
      body: JSON.stringify(item),
    },
  );
  switch (options.qGenre) {
  case 'All':
    dispatch(filmGenreAll());
    break;
  case 'documentary':
    dispatch(filmGenreDocumentary());
    break;
  case 'comedy':
    dispatch(filmGenreComedy());
    break;
  case 'horror':
    dispatch(filmGenreHorror());
    break;
  case 'crime':
    dispatch(filmGenreCrime());
    break;
  default: dispatch(filmGenreAll());
  }
};

export const updateItem = ({ options, item }) => async (dispatch) => {
  await fetch(
    `${baseUrl}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(item),
    },
  );
  switch (options.qGenre) {
  case 'All':
    dispatch(filmGenreAll());
    break;
  case 'documentary':
    dispatch(filmGenreDocumentary());
    break;
  case 'comedy':
    dispatch(filmGenreComedy());
    break;
  case 'horror':
    dispatch(filmGenreHorror());
    break;
  case 'crime':
    dispatch(filmGenreCrime());
    break;
  default: dispatch(filmGenreAll());
  }
};

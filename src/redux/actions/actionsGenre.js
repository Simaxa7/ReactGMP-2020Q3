const baseUrl = 'http://localhost:4000/movies';
const baseSearchUrl = 'http://localhost:4000/movies?searchBy=genres&filter=';
const init = { method: 'GET' };

export const filmGenreAll = () => async (dispatch) => {
  const res = await fetch(`${baseUrl}`, init);
  const body = await res.json();
  dispatch({ type: 'FILMGENREALL', payload: body });
};

export const filmGenreDocumentary = () => async (dispatch) => {
  const res = await fetch(`${baseSearchUrl}documentary`, init);
  const body = await res.json();
  dispatch({ type: 'FILMGENREDOCUMENTARY', payload: body });
};

export const filmGenreComedy = () => async (dispatch) => {
  const res = await fetch(`${baseSearchUrl}comedy`, init);
  const body = await res.json();
  dispatch({ type: 'FILMGENRECOMEDY', payload: body });
};

export const filmGenreHorror = () => async (dispatch) => {
  const res = await fetch(`${baseSearchUrl}horror`, init);
  const body = await res.json();
  dispatch({ type: 'FILMGENREHORROR', payload: body });
};

export const filmGenreCrime = () => async (dispatch) => {
  const res = await fetch(`${baseSearchUrl}crime`, init);
  const body = await res.json();
  dispatch({ type: 'FILMGENRECRIME', payload: body });
};

import reducer from "../src/redux/reducer/reducerGenre";

const emptyState = {
  genreType: 'FILM_GENRE_ALL',
  genreSort: { data: [] },
};

const mockData = [
  {release_date: "2019-02-07", vote_average: 7.2},
  {release_date: "2018-01-06", vote_average: 6.1},
  {release_date: "2020-03-08", vote_average: 8.3},
];
const mockTypeAll = 'FILM_GENRE_ALL';
const mockTypeDocumentary = 'FILM_GENRE_DOCUMENTARY';
const mockTypeComedy = 'FILM_GENRE_COMEDY';
const mockTypeHorror = 'FILM_GENRE_HORROR';
const mockTypeCrime = 'FILM_GENRE_CRIME';

describe('it1', () => {
  it('returns empty state if no states were passed', () => {
    const res = JSON.stringify(reducer(undefined, {}));
    expect(res).toEqual(JSON.stringify(emptyState));
  });
});

describe('it 2 Documentary', () => {
  it('it2', () => {
    const res = JSON.stringify(
      reducer({} , {
        type: mockTypeDocumentary,
        payload: mockData
      }));
    expect(res)
      .toEqual(JSON.stringify(
        Object.assign(
          { genreType: mockTypeDocumentary },
          { genreSort: mockData }
        ))
    );
  });
});

describe('it 3 Documentary', () => {
  it('it3', () => {
    const res = JSON.stringify(
      reducer({} , {
        type: mockTypeComedy,
        payload: mockData
      }));
    expect(res)
      .toEqual(JSON.stringify(
        Object.assign(
          { genreType: mockTypeComedy },
          { genreSort: mockData }
        ))
      );
  });
});

describe('it 4 Horror', () => {
  it('it4', () => {
    const res = JSON.stringify(
      reducer({} , {
        type: mockTypeHorror,
        payload: mockData
      }));
    expect(res)
      .toEqual(JSON.stringify(
        Object.assign(
          { genreType: mockTypeHorror },
          { genreSort: mockData }
        ))
      );
  });
});

describe('it 5 Crime', () => {
  it('it5', () => {
    const res = JSON.stringify(
      reducer({} , {
        type: mockTypeCrime,
        payload: mockData
      }));
    expect(res)
      .toEqual(JSON.stringify(
        Object.assign(
          { genreType: mockTypeCrime },
          { genreSort: mockData }
        ))
      );
  });
});

describe('it 5 All', () => {
  it('it5', () => {
    const res = JSON.stringify(
      reducer({} , {
        type: mockTypeAll,
        payload: mockData
      }));
    expect(res)
      .toEqual(JSON.stringify(
        Object.assign(
          { genreType: mockTypeAll },
          { genreSort: mockData }
        ))
      );
  });
});
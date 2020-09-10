import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import './app.css';
import TopOfHead from '../top-of-head';
import Main from '../main';
import Footer from '../footer';
import data from '../../data/movies.json';
import useDebounce from '../../hooks/useDebounce';

const App = () => {
  const [moviesData, setMoviesData] = useState(
    data.filter((el, ind) => ind > 0 && ind < 14),
  );
  const [searchMoviesData, setSearchMoviesData] = useState(
    moviesData,
  );

  const [searchValue, setSearchValue] = useState('');

  const onSetSearchValue = (val) => {
    setSearchValue(val.toLowerCase());
  };

  const onSetSearchMoviesData = useCallback(() => {
    setSearchMoviesData(
      moviesData.filter((el) => el.title.toLowerCase().includes(searchValue)),
    );
  }, [searchValue, moviesData]);

  const debouncedValue = useDebounce(searchValue, 550);

  useEffect(() => {
    onSetSearchMoviesData();
  }, [debouncedValue]);

  const deleteItem = (id) => setMoviesData(
    moviesData.filter((el) => el.id !== id),
  );

  const changeItem = (curItemData) => {
    console.log('changeItem ', curItemData);
  };

  const [movieDetails, setMovieDetails] = useState(false);
  const [movieDetailsData, setMovieDetailsData] = useState({});

  const onMovieDetailsData = (id) => {
    setMovieDetailsData(
      moviesData.filter((el) => el.id === id)[0],
    );
  };

  const onShowMovieDetails = (id) => {
    setMovieDetails(true);
    onMovieDetailsData(id);
  };

  const onHideMovieDetails = () => {
    setMovieDetails(false);
  };

  const count = searchMoviesData.length;

  return (
    <div className="app">
      <TopOfHead
        onChangeItem={changeItem}
        isShowMovieDetails={movieDetails}
        movieData={movieDetailsData}
        onHideMovieDetails={onHideMovieDetails}
        onSetSearchValue={onSetSearchValue}
        searchValue={searchValue}
      />
      <Main
        count={count}
        moviesData={searchMoviesData}
        onDeleteItem={deleteItem}
        onShowMovieDetails={onShowMovieDetails}
      />
      <Footer />
    </div>
  );
};

export default App;

import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './app.css';
import TopOfHead from '../top-of-head';
import Main from '../main';
import Footer from '../footer';
import useDebounce from '../../hooks/useDebounce';
import Page404 from '../../pages/Page_404';

const App = () => {
  const { genreSort } = useSelector((state) => state.genre);

  const [moviesData, setMoviesData] = useState(
    [],
  );

  // eslint-disable-next-line
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
    // eslint-disable-next-line
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

  const count = genreSort.totalAmount || 0;

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
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main
              count={count}
              moviesData={genreSort.data}
              onDeleteItem={deleteItem}
              onShowMovieDetails={onShowMovieDetails}
            />
          </Route>
          <Route path="/film/:id">
            <Main
              count={count}
              moviesData={genreSort.data}
              onDeleteItem={deleteItem}
              onShowMovieDetails={onShowMovieDetails}
            />
          </Route>
          <Route component={Page404} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

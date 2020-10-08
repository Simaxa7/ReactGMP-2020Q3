const createInitialChecked = (listGenres) => {
  const newObjectGenres = {};

  listGenres.forEach((el) => {
    newObjectGenres[el] = true;
  });

  return newObjectGenres;
};

export default createInitialChecked;

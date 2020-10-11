const createInitialChecked = (listGenres) => {
  const objectGenres = listGenres
    .reduce((acc, el) => {
      acc[el] = true;
      return acc;
    }, {});
  return objectGenres;
};

export default createInitialChecked;

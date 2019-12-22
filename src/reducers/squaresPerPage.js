const squaresPerPage = (state = 0, { type, squares }) => {
  switch (type) {
    case 'SET_SQUARES_PER_PAGE':
      return squares;
    default:
      return state;
  }
};

export default squaresPerPage;

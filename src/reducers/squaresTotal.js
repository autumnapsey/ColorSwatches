const squaresTotal = (state = 0, { type, squares }) => {
  switch (type) {
    case 'SET_SQUARE_TOTAL':
      return squares;
    default:
      return state;
  }
};

export default squaresTotal;

const cartColors = (state = [], { type, color }) => {
  switch (type) {
    case 'ADD_COLOR':
      return [...state, color];
    case 'REMOVE_COLOR':
      return state.filter(i => i !== color);
    default:
      return state;
  }
};

export default cartColors;

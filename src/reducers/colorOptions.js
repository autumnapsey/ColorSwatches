const colorOptions = (state = [], { type, colors }) => {
  switch (type) {
    case 'POPULATE_COLOR_OPTIONS':
      return colors;
    default:
      return state;
  }
};

export default colorOptions;

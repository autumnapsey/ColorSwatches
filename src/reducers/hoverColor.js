const hoverColor = (state = '', { type, color }) => {
  switch (type) {
    case 'SET_HOVER_COLOR':
      return color;
    case 'CLEAR_HOVER_COLOR':
      return '';
    default:
      return state;
  }
};

export default hoverColor;

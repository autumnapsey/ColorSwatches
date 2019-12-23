const currentPage = (state = 0, { type, pageNumber }) => {
    switch (type) {
      case 'CHANGE_CURRENT_PAGE':
        return pageNumber;
      default:
        return state;
    }
  };
  
  export default currentPage;
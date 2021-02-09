const data = {
  data: {
    movies: [],
    loading: false,
    error: false
  }
}

const reducer = (initialState = {...data}, action) => {
  switch(action.type){
    case 'ADD_MOVIE':
      return {
        ...initialState,
        data: {
          ...initialState.data,
          loading: true,
          error: false
        }
      }
    case 'ADD_MOVIE_SUCCESS':
      return {
        ...initialState,
        data: {
          ...initialState.data,
          movies: action.payload,
          loading: false,
          error:false
        }
      }
    case 'ADD_MOVIE_ERROR':
      return {
        ...initialState,
        data: {
          ...initialState.data,
          loading: false,
          error: true
        }
      }
    case 'SEARCH_MOVIE':
      return {
        data: {
          movies: [],
          loading: true,
          error: false
        }
      }
    case 'SEARCH_MOVIE_SUCCESS':
      return {
        ...initialState,
        data: {
          ...initialState.data,
          movies: action.payload,
          loading: false,
          error:false
        }
      }
    case 'SEARCH_MOVIE_ERROR':
      return {
        ...initialState,
        data: {
          ...initialState.data,
          loading: false,
          error: true
        }
      }
    default:
      return initialState;
  }
}

export default reducer
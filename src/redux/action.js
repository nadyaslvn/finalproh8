import axios from 'axios'

const addMovie = (payload) => ({
  payload,
  type: 'ADD_MOVIE' 
  
})

const addMovieSuccess = (payload) => ({
  payload,
  type: 'ADD_MOVIE_SUCCESS' 
})

const addMovieError = (payload) => ({
  payload,
  type: 'ADD_MOVIE_ERROR' 
})

const searchMovieAction = () => ({
  type: 'SEARCH_MOVIE'
})

const searchMovieSuccess = (payload) => ({
  payload,
  type: 'SEARCH_MOVIE_SUCCESS' 
})

const searchMovieError = (payload) => ({
  payload,
  type: 'SEARCH_MOVIE_ERROR' 
})

export const fetchData = () => {
  return (dispatch) => {
    dispatch(addMovie())
    axios.get('http://api.tvmaze.com/search/shows?q=' + 'amazing') // default search is 'amazing'
      .then(response => {
        var step = []
        var index=0;
        Object.entries(response.data).map(function(datas) {
          step.push({ 
            id: index, 
            title: datas[1].show.name,
            image: (datas[1].show.image) ? datas[1].show.image.medium : 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png'
          })
          index++;
        })
        dispatch(addMovieSuccess(step))
      })
      .catch(err => {
        dispatch(addMovieError())
      })
  }
}

export const searchMovie = (query) => {
  return (dispatch) => {
    dispatch(searchMovieAction())
    setTimeout(() => {
      axios.get('http://api.tvmaze.com/search/shows?q=' + query)
      .then(response => {
        var step = []
        var index=0;
        Object.entries(response.data).map(function(datas) {
          step.push({ 
            id: index, 
            title: datas[1].show.name,
            image: (datas[1].show.image) ? datas[1].show.image.medium : 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png'
          })
          index++;
        })
        dispatch(searchMovieSuccess(step))
      })
      .catch(err => {
        dispatch(searchMovieError())
      })
    }, 2000)
  }
}
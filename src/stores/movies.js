import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies',  {
  state: () => ({
    _isLoading: true,
    _movies: [],
    _genres: [],
    _selectedGenreId: null,
  }),
  getters: {
    isLoading: (state) => {
      return state._isLoading
    },
    movies: (state) => {
      if (state._selectedGenreId) {
        return state._movies.filter(movie => movie.genres.map(g => g.id).includes(state._selectedGenreId))
      }
      return state._movies || []
    },
    genres: (state) => {
      return state._genres || []
    },
    selectedGenreId: (state) => {
      return state._selectedGenreId
    }
  },
  actions: {
    async fetchMovies() {
      try {
        this._isLoading = true

        const response = await fetch('https://drumre-lab1-backend.onrender.com/movies')
        console.log(response)
        this._movies = await response.json()

        this._isLoading = false
      } catch (error) {
        console.error(error)
        this._movies = []
        this._isLoading = false
      }
    },
    async fetchGenres() {
      try {
        this._isLoading = true

        const response = await fetch('https://drumre-lab1-backend.onrender.com/genres')
        console.log(response)

        const fetchedGenres = await response.json()
        this._genres.push({id: null, name: 'All'}, ...fetchedGenres);

        this._isLoading = false
      } catch (error) {
        console.error(error)
        this._genres = []
        this._isLoading = false
      }
    },
    selectGenre(genre) {
      this._selectedGenreId = genre.id
      console.log("Selected genre:", genre);
    },
    // searchMovies(query) {
    //   this.searchQuery = query
    //   return this.movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
    // }
  }

})
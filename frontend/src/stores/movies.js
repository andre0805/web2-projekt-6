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
      return state._movies || []
    },
    moviesForSelectedGenre: (state) => {
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
    },
    searchQuery: (state) => {
      return state._searchQuery
    }
  },
  actions: {
    async fetchMovies() {
      try {
        this._isLoading = true

        const response = await fetch('/api/movies')
        this._movies = await response.json()

        console.log(response)

        setTimeout(() => {
          this._isLoading = false
        }, 1000)
      } catch (error) {
        console.error(error)
        this._movies = []

        setTimeout(() => {
          this._isLoading = false
        }, 1000)
      }
    },
    async fetchGenres() {
      try {
        this._isLoading = true

        const response = await fetch('/api/genres')
        this._genres = await response.json()

        console.log(response)

        setTimeout(() => {
          this._isLoading = false
        }, 1000)
      } catch (error) {
        console.error(error)
        this._genres = []

        setTimeout(() => {
          this._isLoading = false
        }, 1000)
      }
    },
    selectGenre(genre) {
      this._selectedGenreId = genre.id
      console.log("Selected genre:", genre);
    },
  }
})
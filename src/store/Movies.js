import axios from "axios";

const Movies = {
  namespaced: true,

  state: {
    Movies: [],
    loading: false,
    error: null,
    page: 1,
  },

  getters: {
    getMovies: (state) => {
      return state.Movies;
    },
    getLoading: (state) => {
      return state.loading;
    },
    getError: (state) => {
      return state.error;
    },
    getPage: (state) => {
      return state.page;
    },
  },

  mutations: {
    setMovies: (state, Movies) => {
      state.Movies = [...state.Movies, ...Movies];
    },
    setLoading: (state, loading) => {
      state.loading = loading;
    },
    setError: (state, error) => {
      state.error = error;
    },
    incrementPage: (state) => {
        state.page = state.page+1;
      },
  },

  actions: {
    fetchMovies({ commit }, page) {
      console.log("fetching...")
      commit("setLoading", true);
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=e49dc35a1ca07781cdaa6c92e4cfd509&page=${page}`
        )
        .then((res) => {
          
          const procesedMovies = res.data.results.map((movie) => {
            const movieObj = {
              image: movie.backdrop_path,
              label: movie.original_title,
              date: movie.release_date,
              rating: movie.vote_average,
            };
            return movieObj;
          });
          commit("setMovies", procesedMovies);
          commit("incrementPage")
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setError", err);
          commit("setLoading", false);
        });
    },
  },
};

export default Movies;

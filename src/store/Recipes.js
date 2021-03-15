import axios from "axios";

const Recipes = {
  namespaced: true,

  state: {
    Recipes: [],
    loading: false,
    error: null,
    paginationMultiplier: 0,
  },

  getters: {
    getRecipes: (state) => {
      return state.Recipes;
    },
    getLoading: (state) => {
        return state.loading;
      },
    getError: (state) => {
        return state.error;
    }
  },

  mutations: {
    setRecipes: (state, recipes) => {
      state.Recipes = recipes;
    },
    setLoading: (state, loading) => {
      state.loading = loading;
    },
    setError: (state, error) => {
      state.error = error;
    },
  },

  actions: {
    getRecipes({ commit }) {
      commit("setLoading", true);
      axios
        .get(
          "https://api.edamam.com/search?q=apple&app_id=6842518a&app_key=77513b43847a8fd0f781da2d958f94a0&from=0&to=6"
        )
        .then((res) => {
          commit("setRecipes", res.data);
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setError", err);
          commit("setLoading", false);
        });
    },
  },
};

export default Recipes;

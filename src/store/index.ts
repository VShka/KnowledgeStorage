import { createStore } from "vuex";
import getUserCategories from "@/infrastructure/getRequests/getUserCategories";
import addNewCategory from "@/infrastructure/postRequest/addNewCategory";

const state = {
  userCategories: []
};
const getters = {
  getCategory(state) {
    if (state.userCategories.length != 0) {
      return state.userCategories.map(item => {
        return item.name;
      });
    }
  }
};
const actions = {
  GET_USER_CATEGORIES({ commit }) {
    getUserCategories().then(data => {
      commit("UPDATE_USER_CATEGORIES", data);
    });
  },
  ADD_NEW_CATEGORY({ commit }, category) {
    addNewCategory(category).then(res => {
      commit("setUserData", res);
    });
  }
};
const mutations = {
  UPDATE_USER_CATEGORIES(state, data) {
    state.userCategories = data;
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions
});

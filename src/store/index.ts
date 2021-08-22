import { createStore } from "vuex";
import getUserCategories from "@/infrastructure/getRequests/getUserCategories";
import addNewCategory from "@/infrastructure/postRequest/addNewCategory";
import deleteCategory from "@/infrastructure/deleteRequests/deleteCategory";

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
  },
  DELETE_CATEGORY({ commit }, categoryId) {
    deleteCategory(categoryId)
      .then(() => {
        commit("REMOVE_CATEGORY", categoryId);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
};
const mutations = {
  UPDATE_USER_CATEGORIES(state, data) {
    state.userCategories = data;
  },
  REMOVE_CATEGORY(state, categoryId) {
    state.userCategories.forEach((item, i) => {
      if (item.id === categoryId) {
        state.userCategories.splice(i, 1);
      }
    });
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions
});

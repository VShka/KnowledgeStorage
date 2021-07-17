import { createStore } from "vuex";
import getUserData from "@/infrastructure/getRequests/getUserData";
import addNewCategory from "@/infrastructure/postRequest/addNewCategory";

const state = {
  userData: []
};
const getters = {
  getCategory(state) {
    if (state.userData.length != 0) {
      return state.userData.map(item => {
        return item.name;
      });
    }
  }
};
const mutations = {
  setUserData(state, data) {
    state.userData = data;
  }
};
const actions = {
  getUserData({ commit }) {
    getUserData().then(data => {
      commit("setUserData", data);
    });
  },
  addNewCategory({ commit }, category) {
    addNewCategory(category).then(res => {
      commit("setUserData", res);
    });
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions
});

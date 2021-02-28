import { createStore } from "vuex";
import getUserData from "@/infrastructure/getRequests/getUserData";

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
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions
});

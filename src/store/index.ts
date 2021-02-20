import { createStore } from "vuex";
import getUserData from "@/infrastructure/getRequests/getUserData";
import getUsers from "@/infrastructure/getRequests/getUsers";

const state = {
  userData: []
};

const getters = {};
const mutations = {};
const actions = {
  getUsers() {
    getUsers();
  },
  getUserData({ state }) {
    state.userData = getUserData();
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions
});

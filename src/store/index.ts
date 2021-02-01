import { createStore } from "vuex";
// import getRequest from "@/infrastructure/getRequest/getRequest";

const state = {
  count: 1
};

const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? "even" : "odd")
};
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};
const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit("increment");
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve): void => {
      setTimeout(() => {
        commit("increment");
        resolve();
      }, 1000);
    });
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions
});

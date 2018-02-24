const ADD = 'ADD';
const MINU = 'MINU';
const UPDATE = 'UPDATE';

const moduleA = {
  state: {
    count: 1,
    change: 12
  },
  getters: {
    odd(state){
      return state.count % 2;
    }
  },
  mutations: {
    [ADD](state, step){
      state.count += step;
    },
    [MINU](state, step){
      state.count -= step;
    },
    [UPDATE](state, newValue){
      state.change = newValue;
    }
  },
  actions: {
    increment({commit}, step) {
      commit(ADD, step);
    },
    decrement({commit}, step) {
      commit(MINU, step);
    },
    update({commit}, value) {
      commit(UPDATE, value);
    }
  }
};

export default {
  modules: {
    a: moduleA
  }
}
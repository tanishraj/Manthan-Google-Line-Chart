import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    graphData: {}
  },
  mutations: {
    SET_GRAPH_DATA(state, payload) {
      state.graphData = payload;
    }
  },
  actions: {
    updateGraphData(context, payload) {
      context.commit('SET_GRAPH_DATA', payload);
    }
  },
  getters: {
    getGraphData: state => state.graphData
  },
  modules: {
  }
})

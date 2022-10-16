import Vue from "vue";
import Vuex from "vuex";

import carrinho from "./modules/carrinho";
import parametros from "./modules/parametros";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { carrinho, parametros },
  //   state: {
  //     produtos: [],
  //     quantidade: 1,
  //     preco: 9.99
  //   },
  //   getters: {
  //     valorTotal(state) {
  //       return state.produtos
  //         .map((p) => p.quantidade * p.preco)
  //         .reduce((total, atual) => total + atual, 0);
  //     },
  //   },
  //   mutations: {
  //     adicionarProduto(state, payload) {
  //       state.produtos.push(payload);
  //     },
  //     setQuantidade(state, payload) {
  //         state.quantidade = payload
  //     },
  //     setPreco(state, payload) {
  //         state.preco = payload
  //     }
  //   },
  //   actions: {
  //     // adicionarProduto(context, payload) {
  //     //   setTimeout(() => {
  //     //     context.commit("adicionarProduto", payload);
  //     //   }, 1000);
  //     // },

  //     // Podemos usar com destructor do ECMA Script
  //     adicionarProduto({ commit }, payload) {
  //       setTimeout(() => {
  //         commit("adicionarProduto", payload);
  //       }, 1000);
  //     },
  //   },
});

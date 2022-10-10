import Vue from "vue";
import axios from "axios";

// Formas de declarar globalmente
// axios.defaults.baseURL = 'https://curso-vue-ae90d-default-rtdb.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.common.get['Accepts'] = 'application/json'

Vue.use({
  install(Vue) {
    // Pode ser usado assim desde que seja declarado acima ou com create conforme abaixo
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: "https://curso-vue-ae90d-default-rtdb.firebaseio.com/",
      headers: { Authorization: "abc123" },
    });

    Vue.prototype.$http.interceptors.request.use(
      (config) => {
        // console.log(config.method);
        return config;
      },
      (error) => Promise.reject(error)
    );

    Vue.prototype.$http.interceptors.response.use(
      (resp) => {
        // Desta forma pega os dados da resposta e cria um array com eles
        // const array = [];
        // for (let chave in resp.data) {
        //     array.push({id: chave, ...resp.data[chave]})
        // }
        return resp;
      },
      (error) => Promise.reject(error)
    );
  },
});

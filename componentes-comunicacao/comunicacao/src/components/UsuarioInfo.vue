<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do usuário: <strong>{{ inverteNome() }}</strong></p>
    <p>Idade do usuário: {{ idade }}</p>
    <p>Email do usuário: {{ email }}</p>
    <button @click="reiniciarNome">Reiniciar nome</button>
    <button @click="reiniciarFn()">Reiniciar nome (Callback)</button>
  </div>
</template>

<script>
import barramento from '@/barramento';
import barramento2 from '../barramento2';

export default {
  data() {
    return {
      email: ''
    }
  },
  props: ["nome", "reiniciarFn", "idade"],

  //ou
  // props: {
  //   nome: String,
  //   reiniciarFn: Function,
  // },

  // ou como objeto com tipagem que aceitará string
  //   props: {
  //     nome: String,
  //   },

  // ou como uma lista(Array) de opções
  // para aceitar string ou array
  // props: {
  //     nome: [String, Array]
  // }

  // ou ainda dessa forma que requer essa props para o
  // componente funcionar
  //   props: {
  //     nome: {
  //         type: String,
  //         required: true
  //     }
  //   },

  // ou pode ser passado uma função qualquer
  // Nesse caso é gerado um array com 10 números
  //zero separados por vírgula e espaço
  //   props: {
  //     nome: {
  //       type: String,
  //       default: function () {
  //         return Array(10).fill(0).join(", ");
  //       },
  //     },
  //   },

  // ou um valor default
  //   props: {
  //     nome: {
  //       type: String,
  //       default: "Anônimo",
  //     },
  //   },
  methods: {
    inverteNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome() {
      this.nome = "Pedro";
      // emite um evento nomeMudou passando o nome
      this.$emit("nomeMudou", this.nome);
    },
  },
  created() {
    barramento.$on('idadeMudou', idade => {
      this.idade = idade
    }),
    barramento2.escutandoEmail(email => {
      this.email = email
    })
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>

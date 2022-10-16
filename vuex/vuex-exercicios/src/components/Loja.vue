<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  computed: {
    quantidade() {
      return this.$store.state.parametros.quantidade;
    },
    preco() {
      return this.$store.state.parametros.preco;
    },
  },
  methods: {
    // Vamos substituir mutations por actions só para conhecimento
    // ...mapMutations(['adicionarProduto']),
    ...mapActions(["adicionarProduto"]),
    // O que o ...mapActions faz por trás dos panos é:
    // adicionarProduto(produto) {
    //     this.$store.dispatch('adicionarProduto', produto)
    // }
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;
      // // eslint-disable-next-line
      // console.log(produto)

      // this.$store.state.produtos.push(produto)
      // this.$store.commit('adicionarProduto', produto)

      // usando ...mapMutations substituímos o commit assim

      //   Pode ser acessado assim
      // this.$store.dispatch('adicionarProduto', produto)
      this.adicionarProduto(produto);
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>

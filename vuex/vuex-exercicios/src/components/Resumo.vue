<template>
  <Painel titulo="Resumo" roxo>
    <div class="resumo">
      <span
        >Total: <strong>{{ total | dinheiro }}</strong></span
      >
      <hr />
      <button>Finalizar!</button>
    </div>
  </Painel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    total: "valorTotal",
  }),
  // Pode ser feito assim
  //   computed: {
  //     total() {
  //       return this.$store.getters.valorTotal;
  //     },
  //   },

  // Ou assim
  // Se fizer isso terá que alterar o nome da variável total para valorTotal
  // computed: mapGetters(['valorTotal'])
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>

<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link
      primario
      tag="button"
      :to="{
        name: 'editarUsuario',
        params: { id },
        query: { completo: true, lingua: 'pt' },
        hash: '#rodape',
      }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log('dentro do componente -> usuario detalhe')
    // Para acessar o id pode ser feito assim
    // next((vm) => {
    //   console.log('id =', vm.id);
    // });

    // Exemplo de usuário autenticado
    // Só navegará se estiver autenticado
    const autenticado = true;
    autenticado ? next() : next(false);
  },
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
};
</script>

<style>
</style>
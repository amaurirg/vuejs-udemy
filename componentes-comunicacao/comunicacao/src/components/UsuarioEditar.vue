<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do usuário:   {{ idade }}</p>
    <p>Email do usuário: {{ email }}</p>
    <button @click="alterarIdade">Alterar idade</button>
    <button @click="enviarEmail">Enviar Email</button>
  </div>
</template>

<script>
import barramento from '@/barramento';
import barramento2 from '@/barramento2';

export default {
  data() {
    return {
      email: 'usuario.editar@email.com'
    }
  },
  props: ["idade"],
  methods: {
    alterarIdade() {
        this.idade += 1
        // this.$emit('idadeMudou', 42)

        // usando o barramento criado para emitir
        // um evento diretamente para seu irmão UsuarioEditar
        barramento.$emit('idadeMudou', this.idade)
        // barramento2.alterarIdade(this.idade)
    },
    enviarEmail() {
      barramento2.emitindoEmail(this.email)
    }
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>

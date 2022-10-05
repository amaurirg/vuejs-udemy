<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>O nome é {{ nome }}</p>
    <p>A idade é {{ idade }}</p>
    <button @click="alterarNome">Alterar nome</button>
    <hr />
    <div class="componentes">
      <app-usuario-info
        :nome="nome"
        :idade="idade"
        @nomeMudou="nome = $event"
        :reiniciarFn="reiniciarNome"
      />
      <app-usuario-editar 
      :idade="idade" 
      />
      <!-- Retiramos para deixarmos a comunicação entre os 
      componentes irmãos diretamente através do barramento -->
      <!-- @idadeMudou="idade=$event" -->
    </div>
  </div>
</template>

// para ter certeza que o pai altera a 
// idade dos filhos podemos somar 1 ao evento
// @idadeMudou="idade=$event + 1"

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  data() {
    return {
      nome: "Pedro",
      idade: 21,
    };
  },
  components: {
    AppUsuarioInfo,
    AppUsuarioEditar,
  },
  methods: {
    alterarNome() {
      this.nome = "Joaquim";
    },
    reiniciarNome() {
      this.nome = "Pedro";
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>

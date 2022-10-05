<template>
  <div class="contadores">
    <h1>Contadores</h1>
    <app-contador v-for="c in 5" :key="c"></app-contador>
  </div>
</template>
  
<script>
import Contador from "./ContadorComponent.vue";
export default {
  components: {
    "app-contador": Contador,
  },
};
</script>
  
  <style>
</style>
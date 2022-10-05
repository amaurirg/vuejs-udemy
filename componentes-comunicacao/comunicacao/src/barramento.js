import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeModificada', idade)
        },
        quandoIdadeMudar(callback) {
            this.$on('idadeModificada', callback)
        }
    }
})
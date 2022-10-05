import Vue from 'vue'
export default new Vue({
    methods: {
        emitindoEmail(email) {
            this.$emit('emailUsuario', email)
        },
        escutandoEmail(callback) {
            this.$on('emailUsuario', callback)
        }
    }
})

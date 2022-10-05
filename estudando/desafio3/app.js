new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        texto() {
            return this.valor == 37 ? 'igual a' : 'diferente de'
        }
    },
    watch: {
        texto() {
            setTimeout(() => {
                this.valor = 0
            }, 2000)
        }
    },
});
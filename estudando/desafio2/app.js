new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: {
        exibirAlerta() {
            alert('Exibido!')
        },
        salvaValor(e) {
            this.valor = e.target.value
        }
    },
})
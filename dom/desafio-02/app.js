new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibeAlerta() {
            alert('Exibindo alerta!')
        },
        exibeValor(event) {
            this.valor = event.target.value
        },
    },
})
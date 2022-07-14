new Vue({
    el: '#desafio',
    data: {
        nome: 'Amauri',
        idade: 47,
        image: './images/tigre.jpeg'
    },
    methods: {
        numRandom() {
            return Math.random()
        }
    },
})

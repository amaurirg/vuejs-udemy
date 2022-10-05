new Vue({
    el: '#app',
    data: {
        playerLife: 10,
        monsterLife: 0,
        running: false
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack() {
            if(this.monsterLife > 0) {
                this.monsterLife = Math.max(this.monsterLife - Math.floor(Math.random() * 10), 0)
            }
            if(this.playerLife > 0) {
                this.playerLife = Math.max(this.playerLife - Math.floor(Math.random() * 10), 0)
            }
        }
    },
    computed: {

    },
    watch: {
        
    }
})
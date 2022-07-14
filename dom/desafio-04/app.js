new Vue({
	el: '#desafio',
	data: {
		aplicarDestaque: false
	},
	methods: {
		iniciarEfeito() {
			this.aplicarDestaque = !this.aplicarDestaque
		},
		iniciarProgresso() {

		}
	},
	computed: {
		alternaClasse() {
		return {
				destaque: this.aplicarDestaque,
				encolher: !this.aplicarDestaque
			}
		}
	}
})

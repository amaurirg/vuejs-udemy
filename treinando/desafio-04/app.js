new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		text: true,
		classUser: '',
		classe2: '',
		borda: false,
		aplica: false
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {

		},
		aplicaClasse(event) {
			if(event.target.value == 'true'){
				this.aplica = true
			}
			else {
				this.aplica = false
			}
			// else if(event.target.value == 'false'){
			// 	this.aplica = false
			// }
			// this.aplica = this.classe2 == 'true' ? true : false
		},
	}
})

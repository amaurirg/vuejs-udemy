new Vue({
	el: '#desafio',
	data: {
		classe1: 'encolher',
		tamanho: true,
		infoUser: '',
		classe4: '',
		redonda: true,
		cor: '',
		estilo: {
			'margin-top': '10px', 
			width: '100px', 
			height: '100px', 
			border: '3px solid purple'
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 === 'encolher' ? 'destaque' : 'encolher'
			}, 500)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100){
					clearInterval(temporizador)
				}
			}, 500)
		},
		setRedonda(event) {
			if(event.target.value == 'true'){
				this.redonda = true
			}else if(event.target.value == 'false'){
				this.redonda = false
			}
		}
	},
})

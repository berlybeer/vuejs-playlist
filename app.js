new Vue({
	el: '#vue-app',
	data: {
		name: 'Ber',
		job: 'Web Developer',
	},
	methods: {
		greet: function (time) {
			return 'Good ' + time + ' ' + this.name
		},
	},
})

new Vue({
	el: '#vue-app',
	data: {
		available: false,
		nearby: false,
	},
	methods: {
		// addToA: function () {
		// 	console.log('addToA')
		// 	return this.a + this.age
		// },
		// addToB: function () {
		// 	console.log('addToB')
		// 	return this.b + this.age
		// },
	},

	computed: {
		compClasses: function () {
			return {
				available: this.available,
				nearby: this.nearby,
			}
		},
	},
})

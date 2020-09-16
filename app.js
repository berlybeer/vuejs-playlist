new Vue({
	el: '#vue-app-one',
	data: {
		output: 'Your fav food',
		greeting: 'Hello',
	},
	methods: {
		readRefs: function () {
			this.greeting = this.$refs.input.value
			this.output = this.$refs.input.value
		},
	},
})

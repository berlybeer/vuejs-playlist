new Vue({
	el: '#vue-app',
	data: {
		name: 'Ber',
		job: 'Web Developer',
		website: 'http://www.myefficy.com',
		websiteTag: '<a href="http://www.myefficy.com">myEfficy website </a>',
	},
	methods: {
		greet: function (time) {
			return 'Good ' + time + ' ' + this.name
		},
	},
})

const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        username: null,
        password: null
    },
    methods: {
        checkForm: function(e) {
            if (this.username && this.password) {
                return true;
            }

            this.errors = [];

            if (!this.username) {
                this.errors.push('Username required.');
            }
            if (!this.password) {
                this.errors.push('Password required.');
            }

            e.preventDefault();
        }
    }
})
const vueApp = new Vue({
    el: '#validated-form',
    data: function() {
        return {
            validationErrors: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        // Submit Form if connecting to backend
        submitForm() {
            if (this.validateForm()) {
                alert('Form Submitted')

            }
        },
        // Validating the form before get submitted
        validateForm() {
            var formId = 'validated-form';
            var nodes = document.querySelectorAll(`#${formId} :invalid`);
            var errorObjectName = 'validationErrors';
            var vm = this; // Current Vue Instance

            Object.keys(this[errorObjectName]).forEach(key => {
                this[errorObjectName][key] = null
            });

            if (nodes.length > 0) {
                nodes.forEach(node => {
                    this[errorObjectName][node.name] = node.validationMessage;
                    node.addEventListener('change', function(e) {
                        vm.validateForm();
                    });
                });

                return false;
            } else {
                return true;
            }
        }
    }
});
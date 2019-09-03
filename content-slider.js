new Vue({
    el: '#slider',
    data: {
        activeSlide: 1
    },
    computed: {
        styleObject: function() {
            const width = 0 - ((this.activeSlide - 1) * 1040)
            return {
                transform: 'translateX(' + width + 'px)'
            }
        }
    },
    methods: {
        changeSlide: function(num) {
            this.activeSlide = num
        },
        nextSlide: function() {
            if (this.activeSlide < 3) this.activeSlide++
        },
        prevSlide: function() {
            if (this.activeSlide > 1) this.activeSlide--
        }
    }
})
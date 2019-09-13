new Vue({
    el: '#slider',
    data: {
        activeSlide: 1
    },
    // Computing what is the exact width to transform, so the slider can slide according to its actual size
    computed: {
        styleObject: function() {
            const width = 0 - ((this.activeSlide - 1) * 33)
            return {
                transform: 'translateX(' + width + '%)'
            }
        }
    },
    // Calculating the slide, button will not work when the slide is already out
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
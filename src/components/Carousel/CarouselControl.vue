<template>
  <div class="carousel-control">
    <a @click.prevent="handleClick"
      :class="[buttonClass, type === 'products' ? 'products' : '']"
      href="#carouselExampleControls"
      role="button" :data-slide="order">
      <span :class="[iconClass, type === 'products' ? 'products' : '']" aria-hidden="true"></span>
      <span class="sr-only"><slot></slot></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CarouselControl',
  props: ['order', 'type'],
  data () {
    return {
      buttonClass: `carousel-control-${this.order}`
    }
  },
  computed: {
    iconClass () {
      return `${this.buttonClass}-icon`
    }
  },
  methods: {
    handleClick (event) {
      if (this.order === 'next') {
        this.$emit('goNext')
      } else if (this.order === 'prev') {
        this.$emit('goPrev')
      }
    }
  }
}
</script>

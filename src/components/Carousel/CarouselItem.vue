<template>
  <transition name="slide">
    <div class="carousel-item" v-if="type === 'banners'" :class="directionClass" v-show="active">
      <img class="d-block w-100" :src="source" :alt="text">
    </div>
    <div v-else class="carousel-item products" :class="directionClass" v-show="active">
      <p class="carousel-item-title">{{ title }}</p>
      <div class="row m-0 carousel-item-list">
        <div v-for="item in list" :key="item.id" class="col-md-3 col-3 p-0">
          <img class="d-block w-100" :src="item.source" :alt="item.text" @click="chooseItem(item)">
          <p class="carousel-item-categories">{{ item.categories }}</p>
          <p class="carousel-item-text">{{ item.text }}</p>
          <p class="carousel-item-price">{{ item.priceList.price }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: [ 'source', 'text', 'active', 'directionClass', 'type', 'list', 'title' ],
  methods: {
    chooseItem (item) {
      this.$eventHub.$emit('dialog-dashboard', item)
    }
  }
}
</script>

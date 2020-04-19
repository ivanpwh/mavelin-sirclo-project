<template>
  <transition name="slide">
    <div class="carousel-item" v-if="type === 'banners'" :class="directionClass" v-show="active">
      <img class="d-block w-100" :src="source" :alt="text">
    </div>
    <div v-else class="carousel-item products" :class="directionClass" v-show="active">
      <p>{{ title }}</p>
      <div class="row m-0">
        <div v-for="item in list" :key="item.id" class="col-md-3 p-0">
          <img class="d-block w-100" :src="item.source" :alt="item.text">
          <p>{{ item.categories }}</p>
          <p>{{ item.text }}</p>
          <p>{{ item.priceList.price }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: [ 'source', 'text', 'active', 'directionClass', 'type', 'list', 'title' ]
}
</script>

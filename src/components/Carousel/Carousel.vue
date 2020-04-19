<template>
  <div id="carouselExampleControls" class="carousel slide">
    <ol class="carousel-indicators" :class="data.type">
      <li v-for="item in data.type === 'banners' ? data.list : tempList" :key="item.id"
        data-target="#carouselExampleControls"
        data-slide-to="item.id"
        :class="item.isActive ? 'active' : ''">
      </li>
    </ol>
    <div class="carousel-inner" v-if="data.type === 'banners'">
      <carousel-item v-for="image in data.list"
        :source="image.source"
        :text="image.text"
        :key="image.id"
        :active="image.isActive"
        :directionClass="directionClass"
        :type="data.type">
      </carousel-item>
    </div>
    <div class="carousel-inner" v-else>
      <carousel-item v-for="item in tempList"
        :list="item.list"
        :key="item.id"
        :title="title"
        :directionClass="directionClass"
        :active="item.isActive"
        :type="data.type">
      </carousel-item>
    </div>
    <carousel-control order="prev" @goPrev="prev()" :type="data.type">Previous</carousel-control>
    <carousel-control order="next" @goNext="next()" :type="data.type">Next</carousel-control>
  </div>
</template>

<script>
import CarouselControl from '@/components/Carousel/CarouselControl.vue'
import CarouselItem from '@/components/Carousel/CarouselItem.vue'
import _ from 'lodash'

export default {
  name: 'Carousel',
  props: ['data', 'title'],
  components: {
    CarouselControl,
    CarouselItem
  },
  data: () => ({
    directionClass: '',
    tempList: []
  }),
  methods: {
    getActiveIndex () {
      return this.data.type === 'banners'
        ? this.data.list.findIndex(obj => obj.isActive)
        : this.tempList.findIndex(obj => obj.isActive)
    },
    next () {
      const activeIndex = this.getActiveIndex()
      let nextIndex = activeIndex + 1
      let activeItem
      let nextItem

      let usedData = this.data.type === 'banners' ? this.data.list : this.tempList

      if (nextIndex > usedData.length - 1) {
        nextIndex = 0
      }
      activeItem = usedData[activeIndex]
      nextItem = usedData[nextIndex]

      nextItem.isActive = true
      activeItem.isActive = false
      this.directionClass = 'slide-next'
    },
    prev () {
      const activeIndex = this.getActiveIndex()
      let prevIndex = activeIndex - 1
      let activeItem
      let prevItem

      let usedData = this.data.type === 'banners' ? this.data.list : this.tempList

      if (prevIndex < 0) {
        prevIndex = usedData.length - 1
      }
      activeItem = usedData[activeIndex]
      prevItem = usedData[prevIndex]

      prevItem.isActive = true
      activeItem.isActive = false
      this.directionClass = 'slide-prev'
    },
    productsCheck (item) {
      if (!_.isNil(item)) {
        if (item.type === 'products') {
          let temp = []
          item.list.forEach((item, i) => {
            if (i <= 3) {
              temp.push(item)
            } else if (i > 3) {
              this.tempList.push(temp)
              temp = []
              temp.push(item)
            }
          })
          this.tempList.push(temp)
          temp = []

          this.tempList.forEach((item, i) => {
            temp.push({
              id: i,
              list: item,
              isActive: i === 0
            })
          })
          this.tempList = temp
        }
      }
    }
  },
  created () {
    this
      .$on('goPrev', this.prev)
      .$on('goNext', this.next)
  },
  mounted () {
    this.productsCheck(this.data)
  }
}
</script>

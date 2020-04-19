<template>
  <div class="dashboard">
    <div class="row m-0 justify-content-around">
      <div class="row m-0">
        <b-dropdown id="dropdown-1" text="IDR" class="m-md-2">
        </b-dropdown>
        <p>BAHASA - <b>ENGLISH</b></p>
      </div>
      <div>mavelin</div>
      <div class="row m-0">
        <p>LOG IN / REGISTER</p>
        <p><span><i class="fas fa-shopping-bag"></i></span> 0 </p>
      </div>
    </div>
    <div class="dashboard-products">
      <div class="carousel" v-if="isLoadingBanners">
        <b-spinner variant="secondary" label="Loading..."></b-spinner>
      </div>
      <Carousel v-else :data=dataBanners></Carousel>
      <div class="row m-0">
        <div class="col-md-4 p-0" v-for="image in images" :key="image.id">
          <img :src="image.source" :alt="image.text" class="w-100">
        </div>
      </div>
      <div class="carousel" v-if="isLoadingWomen">
        <b-spinner variant="secondary" label="Loading..."></b-spinner>
      </div>
      <Carousel v-else :data=dataWomen :title="'POPULAR IN WOMEN'"></Carousel>
      <div class="carousel" v-if="isLoadingMen">
        <b-spinner variant="secondary" label="Loading..."></b-spinner>
      </div>
      <Carousel v-else :data=dataMen :title="'POPULAR IN MEN'"></Carousel>
      <div class="carousel" v-if="isLoadingAccessories">
        <b-spinner variant="secondary" label="Loading..."></b-spinner>
      </div>
      <Carousel v-else :data=dataAccesories :title="'POPULAR IN ACCESORIES'"></Carousel>
    </div>
    <div>
      <p>KOLEKSI LENGKAP DARI BRAND-BRAND TERBAIK</p>
      <p>
        Reprehenderit id culpa est exercitation dolor irure nisi officia cillum. Ex quis tempor minim duis sint deserunt sunt id qui. Quis anim ut consequat eiusmod enim eu. Tempor voluptate ea amet fugiat fugiat minim cupidatat id.
        Aliquip cupidatat consectetur commodo commodo officia do proident cillum. In dolore dolor amet officia minim et fugiat est ut ex. Est adipisicing in aliquip ea consectetur. Qui id sit aliquip dolore exercitation minim velit pariatur exercitation cillum dolor nisi. Mollit ut qui laboris laborum velit in. Minim occaecat velit ullamco dolor amet commodo irure ex sint deserunt fugiat. Dolore minim fugiat in nulla laboris est cillum proident pariatur laboris non enim.
      </p>
      <p>BELANJA FASHION DI MAVELIN INDONESIA</p>
      <p>
        Id cillum dolor veniam tempor exercitation consequat. Fugiat sint commodo eu voluptate mollit duis veniam in velit exercitation enim nisi. Exercitation voluptate incididunt est laboris sint do eiusmod enim commodo pariatur. Aute ea ullamco cillum proident voluptate qui nulla elit qui elit.
        Amet incididunt reprehenderit dolor velit quis Lorem pariatur officia. Nulla elit anim minim aliquip cillum consequat aute culpa proident magna. Incididunt amet eu culpa ipsum ex laboris anim.
      </p>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel.vue'
import { mapGetters } from 'vuex'
import _ from 'lodash'
export default {
  name: 'Dashboard',
  components: {
    Carousel
  },
  data: () => ({
    dataBanners: {
      type: '',
      list: []
    },
    dataMen: {
      type: '',
      list: []
    },
    dataWomen: {
      type: '',
      list: []
    },
    dataAccesories: {
      type: '',
      list: []
    },
    images: [
      {
        id: 0,
        source: 'https://image.freepik.com/free-vector/fashion-background-with-outfit-accessories_83728-1887.jpg',
        text: 'Image 1'
      },
      {
        id: 1,
        source: 'https://image.freepik.com/free-vector/fashion-background-with-shirt-sunglasses-pants-shoes_83728-1890.jpg',
        text: 'Image 2'
      },
      {
        id: 2,
        source: 'https://image.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg',
        text: 'Image 3'
      }
    ],
    categoriesMen: ['JACKET', 'MEN', 'ACCESSORIES'],
    categoriesWomen: ['SHIRT', 'WOMEN', 'ACCESSORIES'],
    priceList: [
      {
        id: 0,
        discount: true,
        discountPrice: 'IDR 235.000',
        price: 'IDR 250.000'
      },
      {
        id: 1,
        discount: false,
        discountPrice: '',
        price: 'IDR 245.000'
      },
      {
        id: 2,
        discount: false,
        discountPrice: '',
        price: 'IDR 230.000'
      }
    ]
  }),
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$store.dispatch('dashboard/GET_BANNERS')
      this.$store.dispatch('dashboard/GET_MEN_PRODUCTS')
      this.$store.dispatch('dashboard/GET_WOMEN_PRODUCTS')
      this.$store.dispatch('dashboard/GET_ACCESSORIES_PRODUCTS')
    }
  },
  computed: {
    ...mapGetters({
      // get banners
      itemBanners: 'dashboard/itemBanners',
      isLoadingBanners: 'dashboard/isLoadingBanners',
      errorBanners: 'dashboard/errorBanners',

      itemMen: 'dashboard/itemMen',
      isLoadingMen: 'dashboard/isLoadingMen',
      errorMen: 'dashboard/errorMen',

      itemWomen: 'dashboard/itemWomen',
      isLoadingWomen: 'dashboard/isLoadingWomen',
      errorWomen: 'dashboard/errorWomen',

      itemAccessories: 'dashboard/itemAccessories',
      isLoadingAccessories: 'dashboard/isLoadingAccessories',
      errorAccessories: 'dashboard/errorAccessories'
    })
  },
  watch: {
    itemBanners (data) {
      if (!_.isNil(data)) {
        data.banners.forEach((item, i) => {
          this.dataBanners.list.push({
            id: i,
            source: `http://${item.image_file}`,
            text: item.title,
            isActive: i === 0
          })
        })
        this.dataBanners.type = 'banners'
      }
    },
    itemMen (data) {
      if (!_.isNil(data)) {
        data.products.forEach((item, i) => {
          var rdmCategories = Math.floor(Math.random() * this.categoriesMen.length)
          var rdmPrice = Math.floor(Math.random() * this.priceList.length)
          this.dataMen.list.push({
            id: i,
            source: `http://${item.image_file}`,
            text: item.name,
            categories: this.categoriesMen[rdmCategories],
            priceList: this.priceList[rdmPrice]
          })
        })
        this.dataMen.type = 'products'
      }
    },
    itemWomen (data) {
      if (!_.isNil(data)) {
        data.products.forEach((item, i) => {
          var rdmCategories = Math.floor(Math.random() * this.categoriesWomen.length)
          var rdmPrice = Math.floor(Math.random() * this.priceList.length)
          this.dataWomen.list.push({
            id: i,
            source: `http://${item.image_file}`,
            text: item.name,
            categories: this.categoriesWomen[rdmCategories],
            priceList: this.priceList[rdmPrice]
          })
        })
        this.dataWomen.type = 'products'
      }
    },
    itemAccessories (data) {
      if (!_.isNil(data)) {
        data.products.forEach((item, i) => {
          var rdmCategories = Math.floor(Math.random() * this.categoriesWomen.length)
          var rdmPrice = Math.floor(Math.random() * this.priceList.length)
          this.dataAccesories.list.push({
            id: i,
            source: `http://${item.image_file}`,
            text: item.name,
            categories: this.categoriesWomen[rdmCategories],
            priceList: this.priceList[rdmPrice]
          })
        })
        this.dataAccesories.type = 'products'
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <NavbarMobile/>
    <div class="content" :class="{ 'open' :showNav }">
      <div class="navbar" v-if="mobileView">
        <i class="fas fa-bars" @click="showNav = !showNav"></i>
      </div>
      <Navbar v-if="!mobileView"/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    NavbarMobile
  },
  data: () => ({
    mobileView: false,
    showNav: false
  }),
  methods: {
    handleView () {
      this.mobileView = window.innerWidth <= 991
    }
  },
  created () {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/style.scss";
</style>

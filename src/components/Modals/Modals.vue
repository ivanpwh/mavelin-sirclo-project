<template>
  <b-modal id="modal-dashboard"
    ref="modalDashboard"
    centered
    hide-footer
    :title="data.text"
    :size="size">
    <div class="d-flex justify-content-center">
      <img class="w-100" :src="data.source" :alt="data.text">
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'Modals',
  data: () => ({
    data: {},
    size: ''
  }),
  created () {
    this.handleView()
    window.addEventListener('resize', this.handleView)
    this.$eventHub.$on('dialog-dashboard', this.showModalDashboard)
  },
  beforeDestroy () {
    this.$eventHub.$off('dialog-dashboard')
  },
  methods: {
    showModalDashboard (item) {
      this.data = item
      this.$refs.modalDashboard.show()
    },
    handleView () {
      this.size = window.innerWidth <= 991 ? 'sm' : ''
    }
  }
}
</script>

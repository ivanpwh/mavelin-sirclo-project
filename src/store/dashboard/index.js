import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  itemBanners: {},
  isLoadingBanners: false,
  errorBanners: false,

  itemMen: {},
  isLoadingMen: false,
  errorMen: false,

  itemWomen: {},
  isLoadingWomen: false,
  errorWomen: false,

  itemAccessories: {},
  isLoadingAccessories: false,
  errorAccessories: false
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

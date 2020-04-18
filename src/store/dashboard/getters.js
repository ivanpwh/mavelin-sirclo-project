// store getters
const itemBanners = state => state.itemBanners.data
const isLoadingBanners = state => state.isLoadingBanners
const errorBanners = state => state.errorBanners.data

const itemMen = state => state.itemMen.data
const isLoadingMen = state => state.isLoadingMen
const errorMen = state => state.errorMen.data

const itemWomen = state => state.itemWomen.data
const isLoadingWomen = state => state.isLoadingWomen
const errorWomen = state => state.errorWomen.data

const itemAccessories = state => state.itemAccessories.data
const isLoadingAccessories = state => state.isLoadingAccessories
const errorAccessories = state => state.errorAccessories.data

export default {
  itemBanners,
  isLoadingBanners,
  errorBanners,

  itemMen,
  isLoadingMen,
  errorMen,

  itemWomen,
  isLoadingWomen,
  errorWomen,

  itemAccessories,
  isLoadingAccessories,
  errorAccessories
}

// store mutations
import {
  GET_BANNERS_LOADING,
  GET_BANNERS_DONE,
  GET_BANNERS_ERROR,

  GET_MEN_PRODUCTS_LOADING,
  GET_MEN_PRODUCTS_DONE,
  GET_MEN_PRODUCTS_ERROR,

  GET_WOMEN_PRODUCTS_LOADING,
  GET_WOMEN_PRODUCTS_DONE,
  GET_WOMEN_PRODUCTS_ERROR,

  GET_ACCESSORIES_PRODUCTS_LOADING,
  GET_ACCESSORIES_PRODUCTS_DONE,
  GET_ACCESSORIES_PRODUCTS_ERROR
} from './actions'

export default {
  [GET_BANNERS_LOADING] (state) {
    state.isLoadingBanners = true
  },
  [GET_BANNERS_DONE] (state, items) {
    state.itemBanners = items
    state.isLoadingBanners = false
    state.errorBanners = false
  },
  [GET_BANNERS_ERROR] (state, error) {
    state.errorBanners = error
    state.itemBanners = {}
    state.isLoadingBanners = false
  },

  [GET_MEN_PRODUCTS_LOADING] (state) {
    state.isLoadingMen = true
  },
  [GET_MEN_PRODUCTS_DONE] (state, items) {
    state.itemMen = items
    state.isLoadingMen = false
    state.errorMen = false
  },
  [GET_MEN_PRODUCTS_ERROR] (state, error) {
    state.errorMen = error
    state.itemMen = {}
    state.isLoadingMen = false
  },

  [GET_WOMEN_PRODUCTS_LOADING] (state) {
    state.isLoadingWomen = true
  },
  [GET_WOMEN_PRODUCTS_DONE] (state, items) {
    state.itemWomen = items
    state.isLoadingWomen = false
    state.errorWomen = false
  },
  [GET_WOMEN_PRODUCTS_ERROR] (state, error) {
    state.errorWomen = error
    state.itemWomen = {}
    state.isLoadingWomen = false
  },

  [GET_ACCESSORIES_PRODUCTS_LOADING] (state) {
    state.isLoadingAccessories = true
  },
  [GET_ACCESSORIES_PRODUCTS_DONE] (state, items) {
    state.itemAccessories = items
    state.isLoadingAccessories = false
    state.errorAccessories = false
  },
  [GET_ACCESSORIES_PRODUCTS_ERROR] (state, error) {
    state.errorAccessories = error
    state.itemAccessories = {}
    state.isLoadingAccessories = false
  }
}

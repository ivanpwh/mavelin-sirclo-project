import {
  getBanners,
  getMenProducts,
  getWomenProducts,
  getAccessoriesProducts
} from '@/api/dashboard.api'

export const GET_BANNERS = 'GET_BANNERS'
export const GET_BANNERS_LOADING = 'GET_BANNERS_LOADING'
export const GET_BANNERS_DONE = 'GET_BANNERS_DONE'
export const GET_BANNERS_ERROR = 'GET_BANNERS_ERROR'

export const GET_MEN_PRODUCTS = 'GET_MEN_PRODUCTS'
export const GET_MEN_PRODUCTS_LOADING = 'GET_MEN_PRODUCTS_LOADING'
export const GET_MEN_PRODUCTS_DONE = 'GET_MEN_PRODUCTS_DONE'
export const GET_MEN_PRODUCTS_ERROR = 'GET_MEN_PRODUCTS_ERROR'

export const GET_WOMEN_PRODUCTS = 'GET_WOMEN_PRODUCTS'
export const GET_WOMEN_PRODUCTS_LOADING = 'GET_WOMEN_PRODUCTS_LOADING'
export const GET_WOMEN_PRODUCTS_DONE = 'GET_WOMEN_PRODUCTS_DONE'
export const GET_WOMEN_PRODUCTS_ERROR = 'GET_WOMEN_PRODUCTS_ERROR'

export const GET_ACCESSORIES_PRODUCTS = 'GET_ACCESSORIES_PRODUCTS'
export const GET_ACCESSORIES_PRODUCTS_LOADING = 'GET_ACCESSORIES_PRODUCTS_LOADING'
export const GET_ACCESSORIES_PRODUCTS_DONE = 'GET_ACCESSORIES_PRODUCTS_DONE'
export const GET_ACCESSORIES_PRODUCTS_ERROR = 'GET_ACCESSORIES_PRODUCTS_ERROR'

export default {
  [GET_BANNERS] (context) {
    context.commit(GET_BANNERS_LOADING)
    return getBanners()
      .then((response) => {
        context.commit(GET_BANNERS_DONE, response)
      })
      .catch((error) => {
        context.commit(GET_BANNERS_ERROR, error)
      })
  },

  [GET_MEN_PRODUCTS] (context) {
    context.commit(GET_MEN_PRODUCTS_LOADING)
    return getMenProducts()
      .then((response) => {
        context.commit(GET_MEN_PRODUCTS_DONE, response)
      })
      .catch((error) => {
        context.commit(GET_MEN_PRODUCTS_ERROR, error)
      })
  },

  [GET_WOMEN_PRODUCTS] (context) {
    context.commit(GET_WOMEN_PRODUCTS_LOADING)
    return getWomenProducts()
      .then((response) => {
        context.commit(GET_WOMEN_PRODUCTS_DONE, response)
      })
      .catch((error) => {
        context.commit(GET_WOMEN_PRODUCTS_ERROR, error)
      })
  },

  [GET_ACCESSORIES_PRODUCTS] (context) {
    context.commit(GET_ACCESSORIES_PRODUCTS_LOADING)
    return getAccessoriesProducts()
      .then((response) => {
        context.commit(GET_ACCESSORIES_PRODUCTS_DONE, response)
      })
      .catch((error) => {
        context.commit(GET_ACCESSORIES_PRODUCTS_ERROR, error)
      })
  }
}

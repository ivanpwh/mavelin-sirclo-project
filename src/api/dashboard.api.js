import axios from 'axios'

// get data banners
export const getBanners = () => axios.get('/banners.json')
  .then(res => res)
  .catch((err) => {
    throw err.response
  })

// get data men products
export const getMenProducts = () => axios.get('/men-products.json')
  .then(res => res)
  .catch((err) => {
    throw err.response
  })

// get data women products
export const getWomenProducts = () => axios.get('/women-products.json')
  .then(res => res)
  .catch((err) => {
    throw err.response
  })

// get data accessories products
export const getAccessoriesProducts = () => axios.get('/accessories-products.json')
  .then(res => res)
  .catch((err) => {
    throw err.response
  })

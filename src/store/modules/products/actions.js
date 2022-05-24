import axios from 'axios';

const actions = {
  getProductItems({ commit }) {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      commit('GET_PRODUCT_ITEMS', response.data);
    });
  },

  getCategoriesName({ commit }) {
    axios.get('https://fakestoreapi.com/products/categories').then((response) => {
      commit('GET_CATEGORIES_NAME', response.data);
    });
  },

  getCategoryItems({ commit }, categorie) {
    axios.get(`https://fakestoreapi.com/products/category/${categorie}`).then((response) => {
      commit('GET_CATEGORY_ITEMS', response.data);
    });
  },

  getProductId({ commit }, id) {
    commit('GET_PRODUCT_ID', id);
  },
};
//
export default actions;

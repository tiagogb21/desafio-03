const mutations = {
  GET_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },

  GET_CATEGORIES_NAME(state, payload) {
    state.categoriesName = payload;
  },

  GET_CATEGORY_ITEMS(state, payload) {
    state.categoryItems = payload;
  },

  GET_ID(state, payload) {
    state.id = payload;
  },

  GET_PRODUCT_ID(state, payload) {
    state.itemCartId = payload;
  },

  ADD_TO_SINGLE_PRODUCT(state, payload) {
    state.singleProduct = [];
    state.singleProduct.push(payload);
  },
};

export default mutations;

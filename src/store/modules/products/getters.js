const getters = {
  productItems: (state) => state.productItems,

  categoriesName: (state) => state.categoriesName,

  categoryItems: (state) => state.categoryItems,

  productItemById: (state) => (id) => {
    const item = state.productItems.find((productItem) => productItem.id === id);
    state.item = item;
    return state.item;
  },

  addProductToCart: (state) => (id) => {
    const isProductInCart = state.cartItems.find((val) => val.id === id);
    const getProduct = state.productItems.find((val) => val.id === id);
    if (isProductInCart) {
      isProductInCart.quantity += 1;
    } else {
      getProduct.quantity = 1;
      state.cartItems.push(getProduct);
    }
  },

  productItemSearch: (state) => (search) => {
    const t = search.toLowerCase();
    if (search === "rate") {
      const teste = state.productItems.sort((a, b) => {
        if (a.rating[t] < b.rating[t]) {
          return -1;
        }
        if (a.rating[t] > b.rating[t]) {
          return 1;
        }
        return 0;
      });
      state.productItems = teste;
      return state.productItems;
    }
    const orderProducts = state.productItems.sort((a, b) => {
      if (a[t] < b[t]) {
        return -1;
      }
      if (a[t] > b[t]) {
        return 1;
      }
      return 0;
    });
    state.productItems = orderProducts;
    return state.productItems;
  },
};

export default getters;

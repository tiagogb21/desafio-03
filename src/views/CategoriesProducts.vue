<template>
  <div class="home">
    <ProductsByCategories />
  </div>
</template>

<script>
import ProductsByCategories from "../components/products-by-categories/ProductsByCategories.vue";

export default {
  name: "CategoriesProducts",
  components: {
    ProductsByCategories,
  },
};
</script>

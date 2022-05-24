<template>
  <div class="home">
    <SingleProduct />
  </div>
</template>

<script>
import SingleProduct from '../components/single-product/SingleProduct.vue';

export default {
  name: 'SingleProductView',
  components: {
    SingleProduct,
  },
};
</script>

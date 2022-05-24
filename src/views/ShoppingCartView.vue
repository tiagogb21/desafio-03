<template>
  <div class="home">
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingCart from '../components/shopping-cart/ShoppingCart.vue';

export default {
  name: 'MenView',
  components: {
    ShoppingCart,
  },
};
</script>

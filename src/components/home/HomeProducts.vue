<template>
  <main>
    <HeaderPrincipal />
    <Products />
  </main>
</template>

<script>
import Products from '../products/AllProducts.vue';
import HeaderPrincipal from '../header/PrincipalHeader.vue';

export default {
  name: 'HomeProducts',
  components: {
    Products,
    HeaderPrincipal,
  },
  data() {
    return {};
  },
};
</script>

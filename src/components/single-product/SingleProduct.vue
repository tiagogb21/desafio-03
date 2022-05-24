<template>
  <HeaderPrincipal />
  <section class="single__product__container">
    <img v-bind:src="product.image" v-bind:alt="product.title" class="teste" />
    <section class="product__details">
      <h3>{{ product.title }}</h3>
      <p><strong>Description</strong>: {{ product.description }}</p>
      <h3>$ {{ product.price }}</h3>
      <p>Quantity: {{ product.rating.count }}</p>
      <p>Rating: {{ product.rating.rate }}</p>
    </section>
  </section>
</template>

<script>
import HeaderPrincipal from '../header/PrincipalHeader.vue';

export default {
  name: 'SingleProduct',
  data() {
    return {
      product: this.$store.state.item,
    };
  },
  components: {
    HeaderPrincipal,
  },
};
</script>

<style>
.single__product__container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgb(235 235 235);
  font-family: Arial, Helvetica, sans-serif;
}

.teste {
  height: 70%;
  width: 40%;
  box-shadow: 20px 20px 5px black;
}

.product__details {
  height: 70vh;
  width: 50%;
  border: 1px solid rgb(182, 180, 180);
  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: rgb(255, 255, 255);
}
</style>

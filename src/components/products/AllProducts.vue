<template>
  <section class="product_container">
    <section class="product_box" v-for="product in productItems" v-bind:key="product.id">
      <h4>{{ product.title }}</h4>
      <img v-bind:src="product.image" v-bind:alt="product.title" class="box__img" />
      <p>$ {{ product.price }}</p>
      <section class="details__container">
        <router-link
          to="/single-product"
          class="router__details"
          @click="productItemById(product.id)"
        >
          + Details
        </router-link>
        <button @click="addProductToCart(product.id)" type="button" class="button__add__to__cart">
          add to cart
        </button>
      </section>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RequisitionApi",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["productItems", "productItemById", "addProductToCart"]),
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
};
</script>

<style>
.container__cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
}

.container__cart img {
  width: 50%;
}

.product_container {
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3vw;
  padding: 3vw;
  padding-top: 25vh;
  background: rgb(235 235 235);
}

.product_box {
  height: 50vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background: rgb(255 255 255);
}

.box__img {
  width: 30%;
}

.details__container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.router__details {
  text-decoration: none;
  font-size: 1.5vw;
  width: 40%;
}

.router__details:hover {
  background: rgb(104, 104, 252);
  color: rgb(255, 255, 255);
}

.details__container button {
  border: none;
  background: rgb(104, 104, 252);
  border-radius: 10px;
  opacity: 0.7;
  font-size: 1.5vw;
  width: 40%;
}

.details__container button:hover {
  cursor: pointer;
  opacity: 1;
}

.details__container img {
  width: 50%;
}
</style>

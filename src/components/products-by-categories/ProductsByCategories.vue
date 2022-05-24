<template>
  <main>
    <section class="menu">
      <PrincipalHeader />
    </section>
    <h2 v-if="categoryItems == undefined">Loading...</h2>
    <section class="product__category__container">
      <section class="product__category__box" v-for="item in categoryItems" v-bind:key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }}</p>
        <img
          v-bind:src="item.image"
          v-bind:alt="item.title"
          style="max-width: 40%; max-height: 40%; margin: auto"
        />
        <section class="details__container">
          <router-link
            to="/single-product"
            class="router__details"
            @click="productItemById(item.id)"
          >
            + details
          </router-link>
          <button @click="addProductToCart(item.id)" type="button">add to cart</button>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import PrincipalHeader from "../header/PrincipalHeader.vue";

export default {
  name: "ProductsByCategories",
  components: {
    PrincipalHeader,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["categoryItems", "productItemById", "addProductToCart"]),
  },
};
</script>

<style>
.product__category__container {
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3vw;
  padding: 3vw;
  padding-top: 25vh;
  background: rgb(235 235 235);
}

.product__category__box {
  height: 50vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background: rgb(255 255 255);
}
</style>

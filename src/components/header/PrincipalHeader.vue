<template>
  <header class="header_container">
    <img src="" alt="" />
    <h1 class="store__name">Petit - VueShop</h1>
    <NavbarCategories />
    <section class="container_sort">
      <section class="box_sort">
        <p>Order by:</p>
        <select name="" @click="orderSearch">
          <option id="title">Name</option>
          <option id="price">Price</option>
          <option id="rate">Rate</option>
        </select>
      </section>
      <router-link to="shopping-cart">
        <img src="../../assets/img/shopping-cart.png" alt="shopping cart" />
      </router-link>
    </section>
  </header>
</template>

<script>
import NavbarCategories from '../navbar/NavBarCategories.vue';

export default {
  name: 'HaderPrincipal',
  components: {
    NavbarCategories,
  },
  data() {
    return {};
  },
  methods: {
    orderSearch(e) {
      const targetID = e.target.options[e.target.selectedIndex].id;
      this.$store.getters.productItemSearch(targetID);
    },
  },
};
</script>

<style>
.store__name {
  color: rgb(255, 255, 255);
}
.header_container {
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #6c62bb;
}

.container_sort {
  color: white;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.container_sort img {
  width: 50%;
}

.box_sort {
  width: 17vw;
  display: flex;
  justify-content: space-around;
}
</style>

<template>
  <div class="categories_container">
    <router-link to="home" class="router"> Home </router-link>
    <section class="categories_box">
      <router-link
        to="categories"
        v-for="(categorieName, index) in categoriesName"
        v-bind:key="index"
        class="router"
        @click="getName(categorieName)"
      >
        {{ categorieName }}
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavbarCategories',
  data() {
    return {
      categories: null,
      loading: true,
      categoryName: '',
    };
  },
  computed: {
    ...mapGetters(['categoriesName']),
  },
  created() {
    this.$store.dispatch('getCategoriesName');
  },
  methods: {
    getName(value) {
      this.$store.dispatch('getCategoryItems', value);
    },
  },
};
</script>

<style>
.categories_container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: rgb(108 98 187);
  height: 7vh;
  padding-bottom: 10px;
}
.categories_box {
  width: 80vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.router {
  width: 23%;
  text-decoration: none;
  color: black;
  font-size: 20px;
  color: rgb(250, 250, 250);
  text-transform: capitalize;
}
.router:hover {
  cursor: pointer;
  background: rgb(19, 30, 131);
}
</style>

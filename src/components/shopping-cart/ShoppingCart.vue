<template>
  <PrincipalHeader />
  <section class="table__container">
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody v-for="cartItem in cartItems" v-bind:key="cartItem.id">
        <tr>
          <td>
            <img
              v-bind:src="cartItem.image"
              v-bind:alt="cartItem.title"
              class="shopping__product__image"
            />
          </td>
          <td class="shopping__product__title">
            {{ cartItem.title }}
          </td>
          <td class="box__quantity">
            <button :id="cartItem.id" type="button" @click="reduceProductQuantity">-</button>
            <p>{{ cartItem.quantity }}</p>
            <button :id="cartItem.id" type="button" @click="addProductQuantity">+</button>
          </td>
          <td>
            <p>$ {{ cartItem.price }}</p>
          </td>
          <td>
            <p>$ {{ (cartItem.quantity * cartItem.price).toFixed(2) }}</p>
            <button :id="cartItem.id" @click="deleteProduct">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Total: $ {{ total }}</p>
  </section>
</template>

<script>
import PrincipalHeader from "../header/PrincipalHeader.vue";

export default {
  name: "ShoppingCart",
  data() {
    return {
      cartItems: this.$store.state.cartItems,
      total: 0,
    };
  },

  components: {
    PrincipalHeader,
  },

  created() {
    this.totalPrice();
  },

  methods: {
    addProductQuantity(e) {
      const getId = e.target.id;
      const verifyQuantity = this.$store.state.cartItems.find((val) => val.id === Number(getId));
      verifyQuantity.quantity += 1;
      this.totalPrice();
      return verifyQuantity.quantity;
    },

    reduceProductQuantity(e) {
      const getId = e.target.id;
      const verifyQuantity = this.$store.state.cartItems.find((val) => val.id === Number(getId));
      if (verifyQuantity.quantity) {
        verifyQuantity.quantity -= 1;
        this.totalPrice();
        return verifyQuantity.quantity;
      }
      this.totalPrice();
      return verifyQuantity.quantity;
    },

    totalPrice() {
      const total = this.$store.state.cartItems
        .reduce((acc, item) => acc + Number((item.quantity * item.price).toFixed(2)), 0)
        .toFixed(2);
      this.total = total;
      return this.total;
    },

    deleteProduct(e) {
      const getId = e.target.id;
      const getProduct = this.$store.state.cartItems.find((val) => val.id !== Number(getId));
      this.$store.state.cartItems.splice(getProduct, 1);
      this.totalPrice();
    },
  },
};
</script>

<style>
.table__container {
  padding-top: 30vh;
}

section {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

table {
  border-collapse: collapse;
  border: 2px solid black;
}

th {
  height: 10vh;
  width: 15vw;
  border: 2px solid black;
}

td {
  height: 10vh;
  text-align: center;
}

.shopping__product__image {
  width: 30%;
}

.shopping__product__title {
  font-size: 13px;
  font-weight: bold;
}

.box__quantity {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

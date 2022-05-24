<template>
  <h2>Welcome</h2>
  <label for="client_name">
    <input :v-model="clientName" type="email" id="client_name" placeholder="User Name" />
  </label>
  <router-link class="{ disabled: clientName.length < 5 }" to="home"> Login </router-link>
</template>

<script>
export default {
  name: "LoginInput",
  data() {
    return {
      clientName: "",
    };
  },
};
</script>

<style>
h2 {
  font-size: 3vw;
  color: blue;
}

a {
  border: none;
  border-radius: 10px;
  font-size: 2vw;
  text-decoration: none;
  background: rgb(112, 112, 238);
  color: rgb(236, 233, 233);
  display: flex;
  justify-content: center;
  align-items: center;
}

a:hover {
  cursor: pointer;
  background: rgb(187, 91, 88);
}
</style>

<template>
  <section class="login_container">
    <HeaderLogin :title="title"></HeaderLogin>
    <form>
      <LoginInput />
    </form>
  </section>
</template>

<script>
import LoginInput from "./LoginInput.vue";
import HeaderLogin from "./HeaderLogin.vue";

export default {
  name: "PersonalLogin",
  components: {
    LoginInput,
    HeaderLogin,
  },
  data() {
    return {
      clientName: "",
      title: "Login",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.login_container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(90deg, #b5b4e0, #6c62bb);
}

.login_container h1 {
  color: white;
  font-size: 4rem;
}

form {
  width: 50vw;
  height: 60vh;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgb(255, 255, 255);
}

form label {
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
}

form label input {
  width: 90%;
  padding-left: 20px;
  border: none;
  border-bottom: 2px solid rgb(209 209 212);
}

form label input:hover {
  border-bottom-color: rgb(106, 103, 158);
}

.header_container {
  position: fixed;
  transition: left 0.5s linear;
  color: blue;
}
</style>

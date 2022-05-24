<template>
  <div class="home">
    <PersonalLogin />
  </div>
</template>

<script>
import PersonalLogin from '../components/login/PersonalLogin.vue';

export default {
  name: 'LoginView',
  components: {
    PersonalLogin,
  },
};
</script>

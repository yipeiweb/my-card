<template>
  <div class="mb-4">
    <navbar></navbar>
    <router-view/>
    <privacity-banner></privacity-banner>
  </div>
</template>

<script>
  import Navbar from './components/navbar.vue';
  import PrivacityBanner from './components/privacity/privacityBanner.vue';

  export default {
    name: 'app',
    components: {
      Navbar,
      PrivacityBanner
    }
  }
</script>

<style src="./assets/styles.css"></style>

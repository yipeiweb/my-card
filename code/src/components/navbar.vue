<template src="../views/layout/navbar.html"></template>

<script>
  import LanguageManager from '../services/languageManager.js';

  export default {
    name: 'navbar',
    mounted() {
      this.getData();
    },
    data() {
      this.languageManager = new LanguageManager();

      return {
        data: null,
        languageTag: this.languageManager.getLanguage()
      }
    },
    methods: {
      changeLanguage(language) {
        this.languageManager.setLanguage(language, this.$router);
      },
      getData() {
        let exportedData = require('../data/navbar.js');  
        
        this.data = exportedData.default;
      }
    }
  }
</script>
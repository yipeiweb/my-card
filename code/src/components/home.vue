<template src="../views/layout/home.html"></template>

<script>
  import LanguageManager from '../services/languageManager.js';

  export default {
    name: 'Home',
    mounted() {
      this.getData();
    },
    data() {
      this.languageManager = new LanguageManager();

      return {
        categories: null,
        languageTag: this.languageManager.getLanguage()
      }
    },
    methods: {
      getData() {
        let exportedData = require('../data/navbar.js');  
        let data = exportedData.default; 

        this.categories = data.categories;
      }
    }
  }
</script>
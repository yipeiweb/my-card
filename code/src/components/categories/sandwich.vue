<template src="../../views/categories/sandwich.html"></template>

<script>
  import LanguageManager from '../../services/languageManager.js';

  export default {
    name: 'sandwich',
    mounted() {
      this.getData();
    },
    data() {
      this.languageManager = new LanguageManager();

      return {
        sandwichData: null,
        languageTag: this.languageManager.getLanguage()
      }
    },
    methods: {
      getData() {
        let exportedData = require('../../data/categories/sandwich.js');  
        let data = exportedData.default; 

        this.sandwichData = data;
      }
    }
  }
</script>
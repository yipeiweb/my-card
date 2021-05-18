<template src="../../views/categories/menu.html"></template>

<script>
  import LanguageManager from '../../services/languageManager.js';

  export default {
    name: 'menu-component',
    mounted() {
      this.getData();
    },
    data() {
      this.languageManager = new LanguageManager();

      return {
        menuData: null,
        languageTag: this.languageManager.getLanguage()
      }
    },
    methods: {
      getData() {
        let exportedData = require('../../data/categories/menu.js');  
        let data = exportedData.default; 

        this.menuData = data;
      }
    }
  }
</script>
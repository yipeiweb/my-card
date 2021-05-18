<template src="../../views/privacity/privacity.html"></template>

<script>
  import LanguageManager from '../../services/languageManager.js';

  export default {
    name: 'privacity',
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
      getData() {
        let exportedData = require('../../data/privacity/privacity.js');  

        this.data = exportedData.default;
      }
    }
  }
</script>
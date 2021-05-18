<template src="../../views/privacity/privacityBanner.html"></template>

<script>
  import LanguageManager from '../../services/languageManager.js';

  export default {
    name: 'privacity-banner',
    watch: {
      isAcceptPrivacity () {
        this.checkIfAcceptPrivacity();
      }
    },
    mounted() {
      this.getData();
      this.checkIfAcceptPrivacity();
    },
    data() {
      this.languageManager = new LanguageManager();

      return {
        isAcceptPrivacity: false,
        data: null,
        languageTag: this.languageManager.getLanguage()
      }
    },
    methods: {
      getData() {
        let exportedData = require('../../data/privacity/privacityBanner.js');  

        this.data = exportedData.default;
      },
      acceptPrivacity() {
        if (localStorage.getItem("privacity-accept") &&
            localStorage.getItem("privacity-accept") == 'true') {
                localStorage.removeItem('privacity-accept');
        }

        localStorage.setItem("privacity-accept", 'true');
        this.checkIfAcceptPrivacity();
      },
      checkIfAcceptPrivacity() {
          if (localStorage.getItem("privacity-accept") &&
              localStorage.getItem("privacity-accept") == 'true') {
                this.isAcceptPrivacity = true;
          }
      }
    }
  }
</script>
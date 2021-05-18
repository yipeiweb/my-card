<template src="../../views/layout/categories.html"></template>

<script>
  import CONST from '../../data/constant.js';
  import LanguageManager from '../../services/languageManager.js';
  import nameSearcher from '../../services/nameSearcher.js'

  export default {
    name: 'combinationDishes',
    mounted() {
      this.getData();
    },
    data() {
      this.languageManager = new LanguageManager();

      return {
        searchPlaceholder: this.getSearchPlaceholder(),
        searchQuery: null,
        data: null,
        languageTag: this.languageManager.getLanguage()
      }
    },
    methods: {
      getData() {
        let exportedData = require('../../data/categories/combinationDishes.js');  

        this.data = exportedData.default;
      },
      getSearchPlaceholder() {
       if (this.languageManager.getLanguage() === CONST.language.es) {
         return 'Buscar';
       }
        return 'Search';
      }
    },
    computed: {
        resultQuery() {
            return nameSearcher(this.searchQuery, this.data.content, this.languageTag);
        }
    },
  }
</script>
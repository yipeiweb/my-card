<template>
    <div>
        <h3 class="text-center">404</h3>
        <h4 class="text-center">{{ text }}</h4>
        <p class="text-center">
        <button @click="goHome()" class="btn btn-outline-primary">
            <i class="fa fa-home fa-2x" aria-hidden="true"></i>
        </button>            
        </p>
    </div>
</template>

<script>
  import LanguageManager from '../services/languageManager.js';
  import CONST from '../data/constant.js';

  export default {
    name: 'Home',
    mounted() {
      this.text = this.getText();
    },
    data() {
      this.languageManager = new LanguageManager();

      return {
        text: null,
      }
    },
    methods: {
      getText() {
          if (this.languageManager.getLanguage() == CONST.language.es) {
              return 'Lo sentimos, no hay contenido con esta ruta';
          }
              return 'Sorry, there is no content with this path';
      },
      goHome() {
          this.$router.push({ path: '/' });
      }
    }
  }
</script>
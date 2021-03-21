import CONST from "./constant.js";

export default class LanguageManager
{
    eventDelegation()
    {
        let languageOptions = document.querySelectorAll("[data-action='change-language']");

        languageOptions.forEach((languageOption) => {
            languageOption.addEventListener('click', () => {
                let languageTag = languageOption.getAttribute('data-language-tag');
                this.setLanguage(languageTag);
            });
        })
    }

    getLanguage()
    {
        if (!localStorage.getItem('language')) {
            if (navigator.language && navigator.language.includes('es')) {
                localStorage.setItem('language', CONST.language.en);
                return CONST.language.en;
            }
 
            localStorage.setItem('language', CONST.language.es);
            return CONST.language.es;
        }
        
         return localStorage.getItem('language');    
    }

    setLanguage(language)
    {
        localStorage.setItem('language', language);
        location.reload();
    }
}
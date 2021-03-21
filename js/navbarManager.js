import EsNavbar from "./translations/es/navbar.js";
import EnNavbar from "./translations/en/navbar.js";
import CONST from "./constant.js";

export default class NavbarManager 
{
    constructor(languageManager)
    {
        this.languageManager = languageManager;
        this.languageTag = this.languageManager.getLanguage();
        this.eventDelegation();
    }

    eventDelegation()
    {
        this.onLoad();
    }

    getData()
    {
        switch (this.languageTag) {
            case CONST.language.es:
                return EsNavbar;
            break;
        
            default:
                return EnNavbar;
            break;
        }
    }

    onLoad()
    {
       let data = this.getData();
       
       document.title = data.title;
       document.querySelector("[data-id='title']").innerHTML = data.title;
       
       /*document.querySelector('[data-id="category-title"]').innerHTML = data.categories.title;
       
       let routerList = document.querySelector('[data-action="router-list"]');
       for (const key in data.categories.types) {
        routerList.innerHTML += `
           <a class="dropdown-item" href="#${CONST.category[key]}" data-action="router">
            ${data.categories.types[key]}
           </a>
        `;
       }*/

       document.querySelector('[data-id="language-title"]').innerHTML = data.languages.title;

       let languagesList = document.querySelector('[data-action="languages-list"]');
       for (const key in data.languages.types) {
        languagesList.innerHTML += `
            <a class="dropdown-item" href="#menu" data-action="change-language" 
                data-language-tag="${key}">
                <img src="./icons/${key}.png" width="30px">
                <span data-id="language-${key}">${data.languages.types[key]}</span>
            </a>
        `;
       }

       this.languageManager.eventDelegation();
    }
}
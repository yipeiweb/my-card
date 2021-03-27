import EnSandwich from "../translations/en/sandwich.js";
import EsSandwich from "../translations/es/sandwich.js";
import CONST from "../constant.js";

export default class SandwichManager {
    constructor(languageManager)
    {
        this.languageManager = languageManager;
        this.languageTag = this.languageManager.getLanguage();
    }

    eventDelegation()
    {
        this.onLoad();
    }

    getData()
    {
        switch (this.languageTag) {
            case CONST.language.es:
                return EsSandwich;
            break;
        
            default:
                return EnSandwich;
            break;
        }
    }

    onLoad() 
    {
        let data = this.getData();

        let exampleImage = `
            <a href="${data.categories.image}" class="text-center">
                <i class="fa fa-eye text-dark"></i>
            </a>
        `;

        let sandwichTitle = document.querySelector('[data-id="sandwich-title"]');
        sandwichTitle ? sandwichTitle.innerHTML = data.categories.title + ' ' + exampleImage : null;
        
        let hotSandwichTitle = document.querySelector('[data-id="hot-sandwich-title"]');
        hotSandwichTitle ? hotSandwichTitle.innerHTML = data.categories.types.titles.hot : null;
        
        let coldSandwichTitle = document.querySelector('[data-id="cold-sandwich-title"]');
        coldSandwichTitle ? coldSandwichTitle.innerHTML = data.categories.types.titles.cold : null;

        let hotSandwichcontainer = document.querySelector('[data-action="add-hot-sandwich-content"]');        
        if (hotSandwichcontainer) {
            for (const key in data.categories.types.hot) {
                hotSandwichcontainer.innerHTML +=`
                    <div class="card diy-card mb-4">
                        <div class="card-body">
                            <span>${key}</span>
                            <strong class="float-right">${data.categories.types.hot[key]}€</strong>
                        </div>
                    </div>`; 
            }
        }

        let coldSandwichcontainer =  document.querySelector('[data-action="add-cold-sandwich-content"]');
        if (coldSandwichcontainer) {
            for (const key in data.categories.types.cold) {
                coldSandwichcontainer.innerHTML +=`
                    <div class="card diy-card mb-4">
                        <div class="card-body">
                            <span>${key}</span>
                            <strong class="float-right">${data.categories.types.cold[key]}€</strong>
                        </div>
                    </div>`; 
            }
        }
        
    }
}
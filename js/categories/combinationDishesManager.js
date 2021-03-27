import EnData from "../translations/en/combinationDishes.js";
import EsData from "../translations/es/combinationDishes.js";
import CONST from "../constant.js";

export default class CombinationDishesManager {
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
                return EsData;
            break;
        
            default:
                return EnData;
            break;
        }
    }

    onLoad() 
    {
        let data = null;

        let combinationPlateTitle = document.querySelector('[data-id="combination-plate-title"]');
        if (combinationPlateTitle) {
            data = this.getData();
            combinationPlateTitle.innerHTML = data.title;
        }

        let combinationPlatescontainer = document.querySelector('[data-action="add-combination-plates-content"]');        
        if (combinationPlatescontainer) {
            for (const key in data.content) {
                combinationPlatescontainer.innerHTML +=`
                    <div class="card diy-card mb-4">
                        <div class="card-body">
                            <a class="${data.content[key].image == '' ? 'd-none' : ''} text-dark mr-2" 
                               href="${data.content[key].image}"><i class="fa fa-eye"></i></a>
                            <span>${key}</span>
                            <strong class="float-right">${data.content[key].price}€</strong>
                        </div>
                    </div>`; 
            }
        }
    }
}
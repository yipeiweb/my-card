import EnData from "../translations/en/specialPlates.js";
import EsData from "../translations/es/specialPlates.js";
import CONST from "../constant.js";

export default class SpecialPlateManager {
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

        let tapasTitle = document.querySelector('[data-id="special-plate-title"]');
        if (tapasTitle) {
            data = this.getData();
            tapasTitle.innerHTML = data.title;
        }

        let tapasContainer = document.querySelector('[data-action="add-special-plate-content"]');        
        if (tapasContainer) {
            for (const key in data.content) {
                tapasContainer.innerHTML +=`
                    <div class="card diy-card mb-4">
                        <div class="card-body">
                            <span>${key}</span>
                            <strong class="float-right">${data.content[key]}€</strong>
                        </div>
                    </div>`; 
            }
        }
    }
}
import EnHome from "./translations/en/home.js";
import EsHome from "./translations/es/home.js";
import CONST from "./constant.js";

export default class HomeManager 
{
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
                return EsHome;
            break;
        
            default:
                return EnHome;
            break;
        }
    }

    onLoad() 
    {
        let data = this.getData();

        let container =  document.querySelector('[data-action="add-home-content"]');
        for (const key in data.categories.types) {
            container.innerHTML +=`
                <a class="link" href="#${CONST.category[key]}" data-action="router">
                    <div class="card diy-card m-4 text-center">
                        <div class="card-body">
                            <h4>${data.categories.types[key]}</h4>
                        </div>
                    </div>
                </a>`; 
        }
    }
}
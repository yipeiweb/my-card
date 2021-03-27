import CONST from "./constant.js";
import EnPrivacity from "./translations/en/privacity.js";
import EsPrivacity from "./translations/es/privacity.js";
import HomeManager from "./homeManager.js";
import SandwichManager from "./categories/sandwichManager.js";
import MenuManager from "./categories/menuManager.js";
import CombinationDishesManager from "./categories/combinationDishesManager.js";
import TapasManager from "./categories/tapasManager.js";
import SpecialDishesManager from "./categories/specialDishesManager.js";

export default class RouterManager
{
    constructor(languageManager)
    {
        this.homeManager = new HomeManager(languageManager);
        this.sandwichManager = new SandwichManager(languageManager);
        this.menuManager = new MenuManager(languageManager);
        this.combinationDishesManager = new CombinationDishesManager(languageManager);
        this.tapasManager = new TapasManager(languageManager);
        this.specialDishesManager = new SpecialDishesManager(languageManager);
        
        this.languageManager = languageManager;
        this.languageTag = this.languageManager.getLanguage();
        
        this.eventDelegation();
    }

    eventDelegation()
    {
        this.fetchWhenLoad();
        this.addCLickEventEverRouter();
    }

    getPrivacityData() 
    {
        switch (this.languageTag) {
            case CONST.language.es:
                return EsPrivacity;
            break;
        
            default:
                return EnPrivacity;
            break;
        }
    }

    fetchWhenLoad()
    {        
        let nowRouter = window.location.href;

        for (const key in CONST.category) {
            let categoryType = CONST.category[key];

            if (nowRouter.includes('#'+categoryType)) {
                this.printContent(
                    CONST.baseLink + CONST.categoryLink + categoryType,
                    categoryType
                );

                return;
            }
        }

        if (nowRouter.includes('#' + CONST.privacityHostName)) {
            let data = this.getPrivacityData();
            
            this.printContent(
                CONST.baseLink + data.hostLink,
                CONST.privacityHostName
            )

            return;
        }

        this.printContent(CONST.baseLink + CONST.homeLink);
    }

    addCLickEventEverRouter()
    {
       let routers =  document.querySelectorAll("[data-action='router']");

       routers.forEach((router) => {
         router.addEventListener("click", () => {
             let href = router.getAttribute('href');
             let categoryType = href.replace('#', '');
             
             if (router.getAttribute('data-category-router') == 'false') {
                let data = this.getPrivacityData();

                this.printContent(
                    CONST.baseLink + data.hostLink,
                    CONST.privacityHostName
                )
             } else {
                this.printContent(
                    CONST.baseLink + CONST.categoryLink + categoryType,
                    categoryType
                );
             }
         })
       });
    }

    printContent(router, categoryType = null)
    {
        let self = this;
        
        fetch(router)
         .then(response => response.text())
         .then(data => document.querySelector("#container").innerHTML  = data)
         .then(() => {
            if (!categoryType) {
                self.homeManager.eventDelegation();
                self.addCLickEventEverRouter();

                return;
            }
            
            self.sandwichManager.eventDelegation();
            self.menuManager.eventDelegation();
            self.combinationDishesManager.eventDelegation();
            self.tapasManager.eventDelegation();
            self.specialDishesManager.eventDelegation();

            self.popState();
         })
    }
    popState()
    {
        window.addEventListener("popstate", () => {
            let nowRouter = window.location.href;
            if (!nowRouter.includes('#')) {
                window.location.replace(CONST.baseLink);
            }
        })
    }
}
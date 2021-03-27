import EnMenu from "../translations/en/menu.js";
import EsMenu from "../translations/es/menu.js";
import CONST from "../constant.js";

export default class MenuManager {
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
                return EsMenu;
            break;
        
            default:
                return EnMenu;
            break;
        }
    }

    onLoad() 
    {
        let data = null;

        let menuTitle = document.querySelector('[data-id="menu-title"]');
        if (menuTitle) {
            data = this.getData();
            menuTitle.innerHTML = data.title;
        }

        let menuPrice = document.querySelector('[data-id="menu-price"]');
        if (menuPrice) {
            menuPrice.innerHTML = data.price + '€';
        }

        let menuConditions = document.querySelector('[data-id="menu-conditions"]');
        if (menuConditions) {
            menuConditions.innerHTML = data.conditions;
        }

        let firstPlateTitle = document.querySelector('[data-id="first-plate-title"]');
        if (firstPlateTitle) {
            firstPlateTitle.innerHTML = data.firstPlate.title;
        }
       
        let secondPlateTitle =  document.querySelector('[data-id="second-plate-title"]');
        if (secondPlateTitle) {
            secondPlateTitle.innerHTML = data.secondPlate.title;
        }

        let firstPlatecontainer = document.querySelector('[data-action="add-first-plate-content"]');        
        if (firstPlatecontainer) {
            data.firstPlate.content.forEach((plate, index) => {
                firstPlatecontainer.innerHTML +=`
                    <div class="card diy-card mb-4">
                        <div class="card-body">
                            <span>${plate}</span>
                            <a class="${data.firstPlate.images[index] == '' ? 'd-none' : ''} float-right text-dark" 
                                href="${data.firstPlate.images[index]}">
                                <i class="fa fa-eye"></i>    
                            </a>
                        </div>
                    </div>`;                
            });
        }
        
        let secondPlatecontainer = document.querySelector('[data-action="add-second-plate-content"]');        
        if (secondPlatecontainer) {
            data.secondPlate.content.forEach((plate, index) => {
                secondPlatecontainer.innerHTML +=`
                    <div class="card diy-card mb-4">
                        <div class="card-body">
                            <span>${plate}</span>
                            <a class="${data.secondPlate.images[index] == '' ? 'd-none' : ''} float-right text-dark" 
                              href="${data.secondPlate.images[index]}">
                              <i class="fa fa-eye"></i>    
                          </a>
                        </div>
                    </div>`;                
            });
        }
    }
}
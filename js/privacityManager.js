import EnData from "./translations/en/privacity.js";
import EsData from "./translations/es/privacity.js";
import CONST from "./constant.js";

export default class PrivacityManager {
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
                return EsData;
            break;
        
            default:
                return EnData;
            break;
        }
    }

    onLoad() 
    {
        let privacityContainer = document.querySelector('[data-id="privacity-container"]');
        if (localStorage.getItem('privacity-accept') == 'true') {
            privacityContainer.classList.remove('d-flex');
            privacityContainer.classList.add('hide');
            return;
        }

        let data = this.getData();

        let privacityContent = document.querySelector('[data-id="privacity-content"]');
        if (privacityContent) {
            privacityContent.innerHTML = data.content;
        }

        let privacityLink = document.querySelector('[data-id="privacity-link-content"]');
        if (privacityLink) {
            privacityLink.innerHTML = data.linkContent;
            privacityLink.href = '#'+data.hostName;
        }

        let acceptPrivacityButon =  document.querySelector('[data-action="accept-privacity"]');
        if (acceptPrivacityButon) {
            acceptPrivacityButon.addEventListener("click", () => {
                localStorage.setItem('privacity-accept', 'true');
                privacityContainer.classList.remove('d-flex');
                privacityContainer.classList.add('hide');
            })
        }

        privacityContainer.classList.remove('hide');
        privacityContainer.classList.add('d-flex');

    }
}
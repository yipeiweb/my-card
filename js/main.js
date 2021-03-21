import RouterManager from "./routerManager.js";
import LanguageManager from "./languageManager.js";
import NavbarManager from "./navbarManager.js";
import PrivacityManager from "./privacityManager.js";

let languageManager = new LanguageManager();

new NavbarManager(languageManager);
new RouterManager(languageManager);
new PrivacityManager(languageManager);
import { checkWord } from './helpers'
import { URLS } from "./enums/redirectingurls";
import { PATHS } from "./enums/paths";

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.href

    if (checkWord(path,PATHS.MARKET)) {
        window.location.replace(URLS.MARKET_URL)
        return
    }

    if (checkWord(path,PATHS.SNIPE)) {
        window.location.replace(URLS.SNIPE_URL)
        return
    }

    if (checkWord(path, PATHS.SWIFT)) {
        window.location.replace(URLS.SWIFT_URL)
        return
    }

    if (checkWord(path,PATHS.STORK)) {
        window.location.replace(URLS.STORK_URL)
        return
    }

    if (window.location.pathname !== '/develop') {
        window.location.replace('https://www.wildberries.ru/')
    }

})

import { checkWord } from './helpers'
import { URLS } from "./redirectingurls";

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.href

    if (checkWord(path,"market")) {
        window.location.replace(URLS.MARKET_URL)
        return
    }

    if (checkWord(path,"snipe")) {
        window.location.replace(URLS.SNIPE_URL)
        return
    }

    if (checkWord(path, "swift")) {
        window.location.replace(URLS.SWIFT_URL)
        return
    }

    if (checkWord(path,"stork")) {
        window.location.replace(URLS.STORK_URL)
        return
    }

    if (window.location.pathname !== '/develop') {
        window.location.replace('https://www.wildberries.ru/')
    }

})

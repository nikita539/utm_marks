import { checkWord } from './helpers'
import { MARKET_URL, SNIPE_URL, SWIFT_URL } from "./redirectingurls";

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.href

    if (checkWord(path,"market")) {
        window.location.replace(MARKET_URL)
        return
    }

    if (checkWord(path,"snipe")) {
        window.location.replace(SNIPE_URL)
        return
    }

    if (checkWord(path, "swift")) {
        window.location.replace(SWIFT_URL)
        return
    }

    if (window.location.pathname !== '/develop') {
        window.location.replace('https://www.wildberries.ru/')
    }
})

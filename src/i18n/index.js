import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import languageEN from './en-US.json';
import languageFR from './fr.json';
import languageES from './es.json';
import languageBR from './br.json';
i18n
.use(XHR)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: languageEN,
        fr: languageFR,
        es: languageES,
        br: languageBR
    },
    /* default language when load the website in browser */
    lng: "fr",
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "fr",

    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    }
})

export default i18n;


//change the language by 
//this.props.i18n.changeLanguage(newLang)
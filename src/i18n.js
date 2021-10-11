import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './Components/locale/resources'


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en_US', // default language
    fallbackLng: 'en_US',
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });
  
export default i18n;


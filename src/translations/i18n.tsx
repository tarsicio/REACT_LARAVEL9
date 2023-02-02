/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Navigationbar
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */
 
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/global.json';
import esTranslation from './es/global.json';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
	en: {
		translation: enTranslation,
	},
	es: {
		translation: esTranslation,
	},
};

i18n
	.use(Backend)
  	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: 'es',
		keySeparator: false,
		interpolation: {
			escapeValue: false,
		}
	});

export default i18n;
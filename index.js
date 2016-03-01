export {version} from "./build/version";
import defaultLocale from "./src/locale/en-US";
export {default as timeFormatLocale} from "./src/locale";
export {default as timeFormatCaEs} from "./src/locale/ca-ES";
export {default as timeFormatDeCh} from "./src/locale/de-CH";
export {default as timeFormatDeDe} from "./src/locale/de-DE";
export {default as timeFormatEnCa} from "./src/locale/en-CA";
export {default as timeFormatEnGb} from "./src/locale/en-GB";
export {default as timeFormatEnUs} from "./src/locale/en-US";
export {default as timeFormatEsEs} from "./src/locale/es-ES";
export {default as timeFormatFiFi} from "./src/locale/fi-FI";
export {default as timeFormatFrCa} from "./src/locale/fr-CA";
export {default as timeFormatFrFr} from "./src/locale/fr-FR";
export {default as timeFormatHeIl} from "./src/locale/he-IL";
export {default as timeFormatHuHu} from "./src/locale/hu-HU";
export {default as timeFormatItIt} from "./src/locale/it-IT";
export {default as timeFormatJaJp} from "./src/locale/ja-JP";
export {default as timeFormatKoKr} from "./src/locale/ko-KR";
export {default as timeFormatMkMk} from "./src/locale/mk-MK";
export {default as timeFormatNlNl} from "./src/locale/nl-NL";
export {default as timeFormatPlPl} from "./src/locale/pl-PL";
export {default as timeFormatPtBr} from "./src/locale/pt-BR";
export {default as timeFormatRuRu} from "./src/locale/ru-RU";
export {default as timeFormatSvSe} from "./src/locale/sv-SE";
export {default as timeFormatZhCn} from "./src/locale/zh-CN";
export {default as isoFormat} from "./src/isoFormat";
export {default as isoParse} from "./src/isoParse";
export var timeFormat = defaultLocale.format;
export var timeParse = defaultLocale.parse;
export var utcFormat = defaultLocale.utcFormat;
export var utcParse = defaultLocale.utcParse;

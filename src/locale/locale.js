import LocalizedStrings from 'react-localization';
import englishContent from './langFiles/en';
import kannadaContent from './langFiles/ka';

let content = new LocalizedStrings({
    en: englishContent,
    ka: kannadaContent
});

export default content;
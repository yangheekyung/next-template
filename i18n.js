const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage : 'ko',
  otherLanguages : ['en', 'zh'],
  localeSubpaths : {
    ko : 'ko',
    en : 'en',
    zh : 'zh'
  }
});
NextI18NextInstance.i18n.languages = ["ko", "en", "zh"];

module.exports = NextI18NextInstance;

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function LanguagePrompt() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check if Chrome translation is available
    if (window.google && google.translate) {
      const translate = google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
  }, []);

  const manualSetLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('userLang', lang);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Choose your language</h2>
        <div className="flex gap-4">
          <button 
            onClick={() => manualSetLanguage('en')}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            English
          </button>
          <button 
            onClick={() => manualSetLanguage('hi')}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            हिंदी
          </button>
        </div>
        {/* Chrome's translate element will appear here */}
        <div id="google_translate_element" className="mt-4"></div>
      </div>
    </div>
  );
};

export default LanguagePrompt;
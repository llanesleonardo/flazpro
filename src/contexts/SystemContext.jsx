import { useState, useEffect ,useCallback} from 'react';
import { createContext } from 'react';
import { useTranslation } from 'react-i18next';

// Definition of a Context and its default values
export const SystemContext = createContext();

export const SystemContextProvider = ({ children }) => {
    const { i18n } = useTranslation(); // Access i18n instance from react-i18next
    const [langCode, setLangCode] = useState(i18n.language);

    // Memoize changeLangCode function to prevent re-renders
    const changeLangCode = useCallback((lang) => {
        if (lang !== langCode) {
            i18n.changeLanguage(lang);
            setLangCode(lang); // Update local state
            localStorage.setItem('i18nextLng', lang); // Save language to localStorage
            console.log('changeLangCode', lang);
        }
    }, [langCode, i18n]); // Include langCode and i18n as dependencies

    // Sync langCode with i18n.language
    useEffect(() => {
        const handleLanguageChange = (newLang) => {
            setLangCode(newLang);
        };

        i18n.on('languageChanged', handleLanguageChange);

        // Cleanup listener on unmount
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    return (
        <SystemContext.Provider value={{ langCode, changeLangCode }}>
            {children}
        </SystemContext.Provider>
    );
};

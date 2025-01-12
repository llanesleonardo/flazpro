import { useState } from 'react';
import { createContext } from 'react';
import { useTranslation } from 'react-i18next';

// Definition of a Context and its defualt values
export const SystemContext = createContext();


export const SystemContextProvider = ({ children }) => {

    const { i18n } = useTranslation(); // Access i18n instance from react-i18next
    const [langCode, setLangCode] = useState(i18n.language);


    const changeLangCode = (lang) => {
        i18n.changeLanguage(lang);
        setLangCode(lang ? lang : 'en');
        localStorage.setItem('i18nextLng', lang); // Save language to localStorage
        console.log('changeLangCode', lang);
    }

    // Send the complete User Info Object to the User context Provider
    return (
        <SystemContext.Provider value={{
            langCode,
            changeLangCode
        }}>
            {children}
        </SystemContext.Provider>
    );

}

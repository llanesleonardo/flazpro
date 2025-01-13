import React, { useContext, useCallback } from 'react';
import { SystemContext } from "../contexts/SystemContext.jsx";
import '../App.css'; // Import the CSS file for styling

const ToggleSwitch = () => {
    const { langCode, changeLangCode } = useContext(SystemContext);
    const isEnglish = langCode === 'en';

    // Memoized function to toggle language
    const toggleLanguage = useCallback(() => {
        const newLang = isEnglish ? 'es' : 'en'; // Toggle between English and Spanish
        changeLangCode(newLang);
    }, [isEnglish, changeLangCode]);

    return (
        <div className="toggle-container">
            <label className="toggle-switch">
                <input 
                    type="checkbox" 
                    checked={isEnglish} 
                    onChange={toggleLanguage} // Add onChange handler here
                />
                <span className="slider"></span>
            </label>
            <div className="language-caption">
                {isEnglish ? 'en' : 'es'} {/* Show 'EN' when English is selected, 'ES' when Spanish is selected */}
            </div>
        </div>
    );
};

export default ToggleSwitch;

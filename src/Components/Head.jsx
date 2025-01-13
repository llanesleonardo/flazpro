
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../contexts/SystemContext.jsx";


function Head() {
    const { t, i18n } = useTranslation();

    const { langCode,
        changeLangCode } = useContext(SystemContext);
    const setLanguage = (lang) => {
        changeLangCode(lang);
    }
    return (
        <>
            <div className='head' style={{ height: '20px' }}>
                <div className='languageNav' style={{ background: '#084e21', width: '100%' }}>
                    <ul className='navBarLeft'>
                        <li className='languageSelect'>
                            <select onChange={(e) => setLanguage(e.target.value)} value={i18n.language}>
                                <option value="en">English</option>
                                <option value="es">Espanol</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Head
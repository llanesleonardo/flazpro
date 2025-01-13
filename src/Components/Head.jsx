import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../contexts/SystemContext.jsx";
import ToggleSwitch from './ToggleSwitch.jsx'; // Import the ToggleSwitch component

function Head() {
    const { t, i18n } = useTranslation();
    
    // Save scroll position before changing language
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            localStorage.setItem('scrollPosition', scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Restore scroll position after language change
    useEffect(() => {
        const savedScrollY = localStorage.getItem('scrollPosition');
        if (savedScrollY) {
            window.scrollTo(0, parseInt(savedScrollY));
        }
    }, []); // This effect runs only once on mount

    return (
        <div className='head'>
            <div className='languageNav' style={{ background: 'transparent', width: '100%', padding: '10px' }}>
                <ToggleSwitch /> {/* Include the ToggleSwitch component here */}
            </div>
        </div>
    );
}

export default Head;

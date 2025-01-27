import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../contexts/SystemContext.jsx"
import { MdOutlineMenu, MdClose } from 'react-icons/md';

const MobileMenu = ({ logoSrc, menuItems, navItems, socialIcons, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { t, i18n } = useTranslation(undefined, { useSuspense: false });
          const { langCode } = useContext(SystemContext);

  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center px-4 py-2">
        <img src={logoSrc} alt="Logo" className="h-12" />
        <button onClick={toggleMenu} className="p-2">
          {isOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="bg-white shadow-md">
          <ul className="flex flex-col items-start p-4">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 flex items-center  w-full">
                <img src={item.icon} className="w-6 h-6 mr-2" alt={item.title} />
                <div>
                  <p className="text-xs">{item.title}</p>
                  <p className="text-sm">{item.content}</p>
                </div>
              </li>
            ))}
            <li className="py-2 w-full">
              <button onClick={handleClick} className="bg-custom-green text-white font-bold py-2 px-4 rounded-full md:w-2/4 xl:w-full lg:w-full">
                {t('Book Now!')}
              </button>
            </li>
            {navItems.map((item, index) => (
              <li key={index} className="py-2 w-full">
                <a href={item.href} className="block w-full">{item.text}</a>
              </li>
            ))}
            <li className="py-2 w-full flex justify-center space-x-4">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href}>
                  <img src={social.icon} className="w-8 h-8" alt="Social Icon" />
                </a>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;

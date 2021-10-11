import {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";

const Header = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        if (lng==="fa"){
          document.body.classList.add('body-fa');
          i18n.changeLanguage(lng);
        }
        if (lng!=="fa"){
          i18n.changeLanguage(lng);
          document.body.classList.remove('body-fa');
        }
    };

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      document.body.classList.toggle('mobile-nav-active');
      setActive(!isActive);
    };


    const [langActive, setLangActive] = useState("en_US");
  
    useEffect(() => {
      if (i18n.language==="fa") {
        setLangActive("fa");
      } else if (i18n.language==="tr") {
        setLangActive("tr");
      } else {
        setLangActive("en_US");
      }   
    }, [i18n.language]);

    return(
        <div>
        <i onClick={handleToggle} className={isActive ? "bi-list bi mobile-nav-toggle d-xl-none" : "bi-x bi mobile-nav-toggle d-xl-none"}></i>

        <header id="header">
          <div className="d-flex flex-column">
      
            <div className="profile">
              <img src="assets/img/profile-img.jpg" alt="Tofigh Nazari" title="Tofigh Nazari" className="img-fluid rounded-circle"/>
              <h1 className="text-light"><a href="/">{t('Tofigh Nazari')}</a></h1>
              <div className="social-links mt-3 text-center">
                <a href="https://instagram.com/tofigh.nazari" rel="noreferrer" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="https://linkedin.com/in/tofigh-nazari-6a86831b0" rel="noreferrer" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/towfigh" target="_blank" rel="noreferrer" className="github"><i className="bx bxl-github"></i></a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li><a href="#hero" className="nav-link scrollto"><i className="bx bx-home"></i> <span>{t('Home')}</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>{t('About Me')}</span></a></li>
                <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>{t('My Skills')}</span></a></li>
                <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>{t('Resume')}</span></a></li>
                <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>{t('My Services')}</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>{t('Contact')}</span></a></li>
              </ul>
            </nav>
            <div className="lang">
              <button onClick={() => changeLanguage('tr')}><img src="assets/img/turkey.png" className={langActive==="tr" ? 'langImgActive' : 'langImg'} alt="Turkce" title="Türkçe"/></button>          
              <button onClick={() => changeLanguage('fa')}><img src="assets/img/iran.png" className={langActive==="fa" ? 'langImgActive' : 'langImg'} alt="Persion" title="زبان فارسی"/></button>          
              <button onClick={() => changeLanguage('en_US')}><img src="assets/img/england.png" className={langActive==="en_US" ? 'langImgActive' : 'langImg'} title="English"/></button>
            </div>
          </div>
        </header>
    </div>
  )

};

export default Header;
import { useTranslation } from "react-i18next";

const About = () => {

    const {t , i18n} = useTranslation();

    return(
      

        <section id="about" className="about">
        <div className="container">
  
          <div className="section-title">
            <h2 className={i18n.language==="fa" ? "titleFa" : ''}>{t('About Me')}</h2>
            <p>{t("Hello and welcome to my personal website. My name is Tofigh . I have been programming for almost 4 years . I realized from a young age that I am interested in creation and programming and now ... I am doing something for which I was born ...!")}</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>{t('I am a Web Developer...!')}</h3>
              <p className="fst-italic">
              {t("Quick information about me")} :
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className={i18n.language==="fa" ? "bi bi-chevron-left" : "bi bi-chevron-right"}></i> <strong>{t('Birthday')}:  </strong> <span>  {t("6 April 1993")}</span></li>
                    <li><i className={i18n.language==="fa" ? "bi bi-chevron-left" : "bi bi-chevron-right"}></i> <strong>{t("Website")}:  </strong> <span>  www.tofighnazari.ir</span></li>
                    <li><i className={i18n.language==="fa" ? "bi bi-chevron-left" : "bi bi-chevron-right"}></i> <strong>{t("Phone")}:  </strong> <span>  {t("+98 936 199 80 54")}</span></li>
                    <li><i className={i18n.language==="fa" ? "bi bi-chevron-left" : "bi bi-chevron-right"}></i> <strong>{t("City")}:  </strong> <span>  {t("İstanbul, Turkey")}</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className={i18n.language==="fa" ? "bi bi-chevron-left" : "bi bi-chevron-right"}></i> <strong>{t("Age")}:</strong> <span>  28</span></li>
                    <li><i className={i18n.language==="fa" ? "bi bi-chevron-left" : "bi bi-chevron-right"}></i> <strong>{t("Degree")}:</strong> <span>  {t("Master")}</span></li>
                    <li><i className={i18n.language==="fa" ? "bi bi-chevron-left" : "bi bi-chevron-right"}></i> <strong>{t("Email")}:</strong> <span>  tofigh.nazari93@gmail.com</span></li>
                    <li><i className={i18n.language==="fa" ? "bi bi-chevron-left" : "bi bi-chevron-right"}></i> <strong>{t("Freelance")}:</strong> <span>  {t("Available")}</span></li>
                  </ul>
                </div>
              </div>
              <p>
                {t("One of the things that is very important to me is discipline and order in my work and even the tools around me. Irregularities distract me and that is why it is very important for me to do projects in a clean and client-approved manner...")}
              </p>
            </div>
          </div>
  
        </div>
      </section>
    )
};

export default About;
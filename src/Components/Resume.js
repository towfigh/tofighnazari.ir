import { useTranslation } from "react-i18next";


const Resume = () => {

  const {t , i18n} = useTranslation();


    return(

        <section id="resume" className="resume">
        <div className="container">
  
          <div className="section-title">
            <h2 className={i18n.language==="fa" ? "titleFa" : ''}>{t("Resume")}</h2>
            <p>{t("A brief overview of my education and work history :")}</p>
          </div>
  
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">{t("Sumary")}</h3>
              <div className="resume-item pb-0">
                <h4>{t('Tofigh Nazari')}</h4>
                <p><em>{t("Born on April 6, 1993, I am interested in creating applications, designing and coding...")}</em></p>
                <ul>
                  <li>{t("Pendik/İstanbul , Turkey")}</li>
                  <li>{t("(+98) 936-1998054")}</li>
                  <li>tofigh.nazari93@gmail.com</li>
                </ul>
              </div>
  
              <h3 className="resume-title">{t("Education")}</h3>
              <div className="resume-item">
                <h4>{t("Master")}</h4>
                <h5>{t("2016 - 2019")}</h5>
                <p><em>{t("Islamic Azad University, Science and Research Branch, Tehran, Iran")}</em></p>
                <p></p>
              </div>
              <div className="resume-item">
                <h4>{t("Bachelor")}</h4>
                <h5>{t("2011 - 2016")}</h5>
                <p><em>{t("Qom University of Technology, Qom, Iran")}</em></p>
                <p></p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">{t("Experience")}</h3>
              <div className="resume-item">
                <h4>{t("Freelancer")}</h4>
                <h5>{t("2017 - Present")}</h5>
                <ul>
                  <li> <a href="https://piano-solo.ir/">Piano-solo</a> : {t("A site for publishing music works and music training packages and teaching related courses and teaching online piano playing.")} </li>
                  <li> <a href="https://polyfa.ir/"> Polyfa</a> : {t("A site for buying and selling and exchanging polymeric materials and books in this field and providing translations of articles for students.")} </li>
                  <li><a href="https://golwall.ir/">{t("Golwall Company's website")} </a>  (<em>{t("In Progress ...")}</em>)</li>
                  <li>{t("Developing my")}  <a href="https://tofighnazari.ir/">{t("personal website !")}</a></li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>{t("Employment")}</h4>
                <h5>{t("2019 - Present")}</h5>
                <ul>
                  <li>{t("Developing frontend of a SAN Storage with ReactJS")}  (<em>{t("In Progress ...")}</em>)</li>
                </ul>
              </div>
            </div>
          </div>
  
        </div>
        </section>
    )
};

export default Resume;
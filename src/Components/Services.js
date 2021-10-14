import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {


  const {t , i18n} = useTranslation();


  const [isFa, setFa] = useState("false");
  
    useEffect(() => {
      if (i18n.language==="fa") {
        setFa(true);
      } else {
        setFa(false);
      }    
    }, [i18n.language]);


    return(

        <section id="services" className="services">
        <div className="container">
  
          <div className="section-title">
            <h2 className={i18n.language==="fa" ? "titleFa" : ''}>{t("My Services")}</h2>
            <p>{t("Depending on your business needs, I will be at your service by providing different services :")}</p>
          </div>
  
          <div className="row">
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up">
              <div className={isFa ? 'servFa icon' : 'icon'}><i className="bi bi-window-sidebar"></i></div>
              <h4 className={isFa ? 'faTitle' : 'title'}><a href="#services">{t("FrontEnd")}</a></h4>
              <p className={isFa ? 'servDescFa' : 'description'}>{t("Design the front side of your site with the latest world skills")}</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className={isFa ? 'servFa icon' : 'icon'}><i className="bi bi-file-word"></i></div>
              <h4 className={isFa ? 'faTitle' : 'title'}><a href="#services">{t("Wordpress")}</a></h4>
              <p className={isFa ? 'servDescFa' : 'description'}>{t("Launch a WordPress website using beautiful templates. Change the templates depending on your opinion")}</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className={isFa ? 'servFa icon' : 'icon'}><i className="bi bi-server"></i></div>
              <h4 className={isFa ? 'faTitle' : 'title'}><a href="#services">{t("BackEnd")}</a></h4>
              <p className={isFa ? 'servDescFa' : 'description'}>{t("Organize and design the server side and databases of your site")}</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="600">
              <div className={isFa ? 'servFa icon' : 'icon'}><i className="bi bi-file-earmark-easel"></i></div>
              <h4 className={isFa ? 'faTitle' : 'title'}><a href="#services">{t("Designing")}</a></h4>
              <p className={isFa ? 'servDescFa' : 'description'}>{t("Design your web pages according to your taste and the most trendy palettes available")}</p>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Services;
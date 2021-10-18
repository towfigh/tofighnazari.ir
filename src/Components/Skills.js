import { useTranslation } from "react-i18next";

const Skills = () => {

  const {t , i18n} = useTranslation();

  
    return(

        <section id="skills" className="skills section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2 className={i18n.language==="fa" ? "titleFa" : ''}>{t("My Skills")}</h2>
          </div>
  
          <div className="row no-gutters">
  
            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="HTML5" src="assets/img/Skills/html.png" id="skillimg"></img>
                <p id="skillname"><strong>HTML5</strong></p>
              </div>
            </div>
  
            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="JavaScript" src="assets/img/Skills/js.png" id="skillimg"></img>
                <p id="skillname"><strong>JavaScript</strong></p>
              </div>
            </div>
            
            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="jquery" src="assets/img/Skills/jquery.jpg" id="skillimg"></img>
                <p id="skillname"><strong>JQuery</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="es6" src="assets/img/Skills/es6.png" id="skillimg"></img>
                <p id="skillname"><strong>ECMA Script</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="NodeJS" src="assets/img/Skills/nodejs.png" id="skillimg"></img>
                <p id="skillname"><strong>NodeJS</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="ReactJS" src="assets/img/Skills/react.png" id="skillimg"></img>
                <p id="skillname"><strong>ReactJS</strong></p>
              </div>
            </div>
    
          </div>

          <div className="row no-gutters">
  
            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="CSS" src="assets/img/Skills/css.png" id="skillimg"></img>
                <p id="skillname"><strong>CSS</strong></p>
              </div>
            </div>
  
            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="BootStrap" src="assets/img/Skills/BootStrap.png" id="skillimg"></img>
                <p id="skillname"><strong>BootStrap</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="SemanticUI" src="assets/img/Skills/SemanticUI.png" id="skillimg"></img>
                <p id="skillname"><strong>SemanticUI</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="Less" src="assets/img/Skills/less.png" id="skillimg"></img>
                <p id="skillname"><strong>Less</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="Sass" src="assets/img/Skills/sass.png" id="skillimg"></img>
                <p id="skillname"><strong>Sass</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="Material" src="assets/img/Skills/matui.png" id="skillimg"></img>
                <p id="skillname"><strong>Material UI</strong></p>
              </div>
            </div>
    
          </div>

          <div className="row no-gutters">
  
            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="Wordpress" src="assets/img/Skills/wordpress.png" id="skillimg"></img>
                <p id="skillname"><strong>Wordpress</strong></p>
              </div>
            </div>
  
            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="PHP" src="assets/img/Skills/php.png" id="skillimg"></img>
                <p id="skillname"><strong>PHP</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="AJAX" src="assets/img/Skills/AJAX.png" id="skillimg"></img>
                <p id="skillname"><strong>AJAX</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="Figma" src="assets/img/Skills/figma.png" id="skillimg"></img>
                <p id="skillname"><strong>Figma</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="MySQL" src="assets/img/Skills/mysql.jpg" id="skillimg"></img>
                <p id="skillname"><strong>MySQL</strong></p>
              </div>
            </div>

            <div id="skillitems" className="col-lg-2 col-md-4 col-sm-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <img alt="MongoDB" src="assets/img/Skills/mongodb.jpg" id="skillimg"></img>
                <p id="skillname"><strong>MongoDB</strong></p>
              </div>
            </div>
    
          </div>
  
          </div>
  
      </section>
    )
};

export default Skills;
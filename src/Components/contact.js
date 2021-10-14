import { useTranslation } from "react-i18next";

import React from "react";



const Contact = () => {

    const {t , i18n} = useTranslation();

    return (

        <section id="contact" className="contact">
           <div className="container">
    
            <div className="section-title">
                <h2  className={i18n.language==="fa" ? "titleFa" : ''}>{t('Contact')}</h2>
                <p>{t("For projects, reviews, suggestions and even greetings! Contact me through the following contact items :")}</p>
            </div>
    
            <div className="row" data-aos="fade-in">
    
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                        <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>{t("Location")} :</h4>
                        <p>{t("Pendik/İstanbul , Turkey")}</p>
                        </div>
        
                        <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>{t("Email")}:</h4>
                        <p>tofigh.nazari93@gmail.com</p>
                        </div>
        
                        <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>{t("Call")}:</h4>
                        <p>{t("+98 936 199 8054")}</p>
                        </div>
                    </div>
        
                </div>
    
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1289.2504527620717!2d29.325825497075265!3d40.93464164585341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1634207713397!5m2!1sen!2s"  frameBorder="0" style={{border:'0', width: '100%' , height: '290px'}} allowFullScreen title="map"></iframe>

                    {/* <form action="forms/contact.php" method="post" className="php-email-form">
                        <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">{t("Your Name")} :</label>
                            <input type="text" name="name" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="name">{t("Your Email")} :</label>
                            <input type="email" className="form-control" name="email" id="email" required/>
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="name">{t("Subject")} :</label>
                        <input type="text" className="form-control" name="subject" id="subject" required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="name">{t("Message")} :</label>
                        <textarea className="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <div className="my-3">
                        <div className="loading">{t("Loading")}</div>
                        <div className="error-message"></div>
                        <div className="sent-message">{t("Your message has been sent. Thank you!")}</div>
                        </div>
                        <div className="text-center"><button type="submit">{t('Send Message')}</button></div>
                    </form> */}
                    </div>
        
                </div>
    
            </div>
      </section>


    )
};

export default Contact;
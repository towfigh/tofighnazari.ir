import React from "react";



const Contact = () => {

    return (

        <section id="contact" className="contact">
           <div className="container">
    
            <div className="section-title">
                <h2>Contact</h2>
                <p>For projects, reviews, suggestions and even greetings! Contact me through the following contact items :</p>
            </div>
    
            <div className="row" data-aos="fade-in">
    
                <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                    <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Pendik/İstanbul , Turkey</p>
                    </div>
    
                    <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>tofigh.nazari93@gmail.com</p>
                    </div>
    
                    <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+98 936 199 8054</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.077021819008!2d29.323183688614247!3d40.93597911824361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad0a009e00a49%3A0x67676050d69b82fc!2sViaport%20Asia%20Outlet%20Shopping!5e0!3m2!1sen!2s!4v1633012068997!5m2!1sen!2s"  frameBorder="0" style={{border:'0', width: '100%' , height: '290px'}} allowFullScreen title="map"></iframe>
                </div>
    
                </div>
    
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" className="php-email-form">
                    <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required/>
                    </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
                </div>
    
            </div>
    
            </div>
      </section>


    )
};

export default Contact;
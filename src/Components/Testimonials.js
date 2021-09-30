const Testimonials = () => {

    return(

        <section id="testimonials" className="testimonials section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>Good vibes</p>
          </div>
  
          <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
  
              <div className="swiper-slide">
                <div className="testimonial-item" data-aos="fade-up">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    comment
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                  <h3>name</h3>
                  <h4>muhendis</h4>
                </div>
              </div>
  
            </div>
            <div className="swiper-pagination"></div>
          </div>
  
        </div>
      </section>
    )
}

export default Testimonials;
const Services = () => {

    return(

        <section id="services" className="services">
        <div className="container">
  
          <div className="section-title">
            <h2>My Services</h2>
            <p>Depending on your business needs, I will be at your service by providing different services :</p>
          </div>
  
          <div className="row">
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon"><i className="bi bi-window-sidebar"></i></div>
              <h4 className="title"><a href="#services">FrontEnd</a></h4>
              <p className="description">Design the front side of your site with the latest world skills</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bi bi-file-word"></i></div>
              <h4 className="title"><a href="#services">Wordpress</a></h4>
              <p className="description">Launch a WordPress website using beautiful templates. Change the templates depending on your opinion</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bi bi-server"></i></div>
              <h4 className="title"><a href="#services">BackEnd</a></h4>
              <p className="description">Organize and design the server side and databases of your site</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bi bi-file-earmark-easel"></i></div>
              <h4 className="title"><a href="#services">Designing</a></h4>
              <p className="description">Design your web pages according to your taste and the most trendy palettes available</p>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Services;
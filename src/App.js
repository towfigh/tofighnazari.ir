import { Fragment , useState } from 'react';
import Typed from 'react-typed';
import { withRouter } from 'react-router-dom';

const App = props => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    document.body.classList.toggle('mobile-nav-active');
    setActive(!isActive);
  };

  // let skilsContent = document.getElementById('skills');
  // if (skilsContent) {
  //   new Waypoint({
  //     element: skilsContent,
  //     offset: '80%',
  //     handler: function(direction) {
  //       let progress = document.getElementsByClassName('.progress-bar', true);
  //       progress.forEach((el) => {
  //         el.style.width = el.getAttribute('aria-valuenow') + '%'
  //       });
  //     }
  //   })
  // }

  return (

  <Fragment>

    <i onClick={handleToggle} className={isActive ? "bi-list bi mobile-nav-toggle d-xl-none" : "bi-x bi mobile-nav-toggle d-xl-none"}></i>

    <header id="header">
      <div className="d-flex flex-column">
  
        <div className="profile">
          <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
          <h1 className="text-light"><a href="index.html">Tofigh Nazari</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://instagram.com/tofigh.nazari" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://linkedin.com/in/tofigh-nazari-6a86831b0" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/towfigh" className="github"><i className="bx bxl-github"></i></a>
          </div>
        </div>
  
        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#hero" className="nav-link scrollto"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Skills</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  
    
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Tofigh Nazari</h1>
        <p>I'm <span className="typed" data-typed-items="Developer, Freelancer"><Typed
            strings={[
              'Developer...',
              'Freelancer...',
              'Programmer...']}
                typeSpeed={170}
                backSpeed={60}
                loop >
                <span></span>
            </Typed></span></p>
      </div>
    </section>
  
    <main id="main">
  
      
      <section id="about" className="about">
        <div className="container">
  
          <div className="section-title">
            <h2>About</h2>
            <p>Hello and welcome to my personal website. My name is Tofigh . I have been programming for almost 4 years . I realized from a young age that I am interested in creation and programming and now ... I am doing something for which I was born ...!</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>I am a Web Developer ... !</h3>
              <p className="fst-italic">
              Quick information about me :
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>6 April 1993</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.tofighnazari.ir</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+98 936 199 80 54</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tehran , Iran</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>tofigh.nazari93@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p>
                One of the things that is very important to me is discipline and order in my work and even the tools around me. Irregularities distract me and that is why it is very important for me to do projects in a clean and client-approved manner...
              </p>
            </div>
          </div>
  
        </div>
      </section>
  
      
      {/* <section id="facts" className="facts">
        <div className="container">

          <div className="section-title">
            <h2>Facts</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div className="row no-gutters">
  
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Happy Clients</strong> consequuntur quae</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="count-box">
                <i className="bi bi-people"></i>
                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section> */}
  
      
      <section id="skills" className="skills section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Skills</h2>
          </div>
  
          <div className="row skills-content">
  
            <div className="col-lg-6" data-aos="fade-up">
  
              <div className="progress">
                <span className="skill">HTML <i className="val">1100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">CSS / Sass / Less<i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">JavaScript / JQuery / ECMA Script<i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Figma / Photoshop / Adobe XD <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"> Bootsrtap / semantic ui / material design <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
            </div>
  
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
  
              <div className="progress">
                <span className="skill">React Js <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">WordPress<i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">PHP / MySQL / Ajax <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Node Js / MongoDB <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Git<i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

  
            </div>
  
          </div>
  
        </div>
      </section>
  
      
      <section id="resume" className="resume">
        <div className="container">
  
          <div className="section-title">
            <h2>Resume</h2>
            <p>A brief overview of my education and work history :</p>
          </div>
  
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Tofigh Nazari</h4>
                <p><em>Born on April 6, 1993, I am the first child in the family and I am interested in creating, designing and coding...</em></p>
                <ul>
                  <li>TehranPars, Tehran , Iran</li>
                  <li>(+98) 936-1998054</li>
                  <li>tofigh.nazari93@gmail.com</li>
                </ul>
              </div>
  
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Master</h4>
                <h5>2016 - 2019</h5>
                <p><em>Islamic Azad University, Science and Research Branch, Tehran, Iran</em></p>
                <p></p>
              </div>
              <div className="resume-item">
                <h4>Bachelor</h4>
                <h5>2011 - 2016</h5>
                <p><em>Qom University of Technology, Qom, Iran</em></p>
                <p></p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Experience</h3>
              <div className="resume-item">
                <h4>Freelancer</h4>
                <h5>2017 - Present</h5>
                <ul>
                  <li> <a href="https://piano-solo.ir/">Piano-solo</a> : A site for publishing music works and music training packages and teaching related courses and teaching online piano playing. </li>
                  <li> <a href="https://polyfa.ir/"> Polyfa</a> : A site for buying and selling and exchanging polymeric materials and books in this field and providing translations of articles for students. </li>
                  <li><a href="https://golwall.ir/">Golwall Company</a>'s website  (<em>In Progress ..</em>)</li>
                  <li>Developing my  <a href="https://tofighnazari.ir/">personal website !</a></li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Employment</h4>
                <h5>2019 - Present</h5>
                <ul>
                  <li>Developing frontend of a SAN Storage with ReactJS  (<em>In Progress ..</em>)</li>
                </ul>
              </div>
            </div>
          </div>
  
        </div>
        </section>
  
  
      
      <section id="services" className="services">
        <div className="container">
  
          <div className="section-title">
            <h2>My Services</h2>
            <p>Depending on your business needs, I will be at your service by providing different services :</p>
          </div>
  
          <div className="row">
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon"><i className="bi bi-window-sidebar"></i></div>
              <h4 className="title"><a href="">FrontEnd</a></h4>
              <p className="description">Design the front side of your site with the latest world skills</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bi bi-file-word"></i></div>
              <h4 className="title"><a href="">Wordpress</a></h4>
              <p className="description">Launch a WordPress website using beautiful templates. Change the templates depending on your opinion</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bi bi-server"></i></div>
              <h4 className="title"><a href="">BackEnd</a></h4>
              <p className="description">Organize and design the server side and databases of your site</p>
            </div>
            <div className="col-lg-3 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bi bi-file-earmark-easel"></i></div>
              <h4 className="title"><a href="">Designing</a></h4>
              <p className="description">Design your web pages according to your taste and the most trendy palettes available</p>
            </div>
          </div>
        </div>
      </section>
  
      
      {/* <section id="testimonials" className="testimonials section-bg">
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
      </section> */}
  
      
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
                  <p>TehranPars, Tehran , Iran</p>
                </div>
  
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>tofigh.nazari93@gmail.com</p>
                </div>
  
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+98 0936 199 8054</p>
                </div>
  
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{border:'0', width: '100%' , height: '290px'}} allowFullScreen></iframe>
              </div>
  
            </div>
  
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
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
  
    </main>
  
    
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright reserved
        </div>
      </div>
    </footer>
  
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  
  </Fragment>

  );
}

export default withRouter(App);

const Resume = () => {

    return(

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
                  <li>Pendik/İstanbul , Turkey</li>
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
    )
};

export default Resume;
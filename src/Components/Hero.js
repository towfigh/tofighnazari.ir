import Typed from 'react-typed';

const Hero = () => {

    return(

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
    )
};

export default Hero;
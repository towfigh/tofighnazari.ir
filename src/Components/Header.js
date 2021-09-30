import {useState} from 'react';


const Header = () => {

    const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    document.body.classList.toggle('mobile-nav-active');
    setActive(!isActive);
  };
    return(
        <div>
        <i onClick={handleToggle} className={isActive ? "bi-list bi mobile-nav-toggle d-xl-none" : "bi-x bi mobile-nav-toggle d-xl-none"}></i>

    <header id="header">
      <div className="d-flex flex-column">
  
        <div className="profile">
          <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
          <h1 className="text-light"><a href="/">Tofigh Nazari</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://instagram.com/tofigh.nazari" rel="noreferrer" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://linkedin.com/in/tofigh-nazari-6a86831b0" rel="noreferrer" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/towfigh" target="_blank" rel="noreferrer" className="github"><i className="bx bxl-github"></i></a>
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
</div>
    )

};

export default Header;
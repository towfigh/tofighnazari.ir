import { Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import Contact from './Components/contact';
import Services from './Components/Services';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import About from './Components/About';
import Hero from './Components/Hero';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Testimoial from './Components/Testimonials'
// import Facts from './Components/Fact';

const App = props => {
  return (
  <Fragment>
    <Header/>
    <Hero/>
    <main id="main">
      <About/>
      {/* <Facts/> */}
      <Skills/>
      <Resume/>
      <Services/>
      {/* <Testimoial/> */}
      <Contact/>
    </main>
    <Footer/>
  </Fragment>
  );
}
export default withRouter(App);

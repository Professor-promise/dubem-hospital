import About from './components/about/About';
import Appointment from './components/appointment/Appointment';
import Blog from './components/blog/Blog';
import Doctor from './components/doctor/Doctor';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Contact from './components/nav/Contact';
import Nav from './components/nav/Nav';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <>
      <Contact />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Doctor />
      <Blog />
      <Appointment />
      <Footer />
    </>
  );
}

export default App;

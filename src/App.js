import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About';
import Exprerience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Test from './components/test/test'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Exprerience />
      <Service />
      <Portfolio />
      <Test />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

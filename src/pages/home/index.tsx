import AboutUs from "../../components/about"
import Clients from "../../components/clients"
import Contact from "../../components/contact"
import CounterSec from "../../components/counter-sec"
import Details from "../../components/details"
import FAQS from "../../components/faqs"
import Features from "../../components/features"
import Footer from "../../components/footer"
import Gallery from "../../components/gallery"
import Hero from "../../components/hero"
import Pricing from "../../components/pricing"
import Team from "../../components/team"

const Home = () => {
  return (
    <>
      
      <Hero/>
      <AboutUs/>
      <Features/>
      <CounterSec/>
      <Details/>
      <Gallery/>
      <Clients/>
      <Team/>
      <Pricing/>
      <FAQS/>
      <Contact/>
      <Footer/>


    </>
  )
}

export default Home
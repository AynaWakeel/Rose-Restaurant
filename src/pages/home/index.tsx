import AboutUs from "../../sections/about"
import Clients from "../../sections/clients"
import Contact from "../../sections/contact"
import CounterSec from "../../sections/counter-sec"
import Details from "../../sections/details"
import FAQS from "../../sections/faqs"
import Features from "../../sections/features"
import Footer from "../../components/footer"
import Gallery from "../../sections/gallery"
import Hero from "../../sections/hero"
import Pricing from "../../sections/pricing"
import Team from "../../sections/team"
import { useRef } from "react"
import MoveUp from "../../components/goUp"

const Home = () => {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const featuresRef = useRef<HTMLDivElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const teamRef = useRef<HTMLDivElement | null>(null)
  const pricingRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      
      <Hero
      scrollToSection={scrollToSection}
      refs={{heroRef,aboutRef,featuresRef,galleryRef,teamRef,pricingRef,contactRef}}
      />
      <AboutUs
      refs={{aboutRef}}
      />
      <Features
      refs={{featuresRef}}
      />
      <CounterSec/>
      <Details/>
      <Gallery
      refs={{galleryRef}}
      />
      <Clients/>
      <Team
      refs={{teamRef}}
      />
      <Pricing
      refs={{pricingRef}}
      />
      <FAQS/>
      <Contact
      refs={{contactRef}}
      />
      <Footer/>

      <MoveUp
      scrollToSection={scrollToSection}
      refs={{heroRef}}
      />


    </>
  )
}

export default Home
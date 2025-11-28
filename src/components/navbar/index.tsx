import { useEffect, useRef, useState } from 'react'
import menubar from '../../assets/icons/bars-solid-full.svg'
import close from '../../assets/icons/xmark-solid-full.svg'

interface navProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: any;
}

const Navbar: React.FC<navProps> = ({ scrollToSection, refs }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [activeLink, setActiveLink] = useState<string>('#home')
  const MenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (MenuRef.current && !MenuRef.current.contains(e.target as Node)) {

        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navlinks = [
    { href: '#home', label: 'Home', ref: refs.heroRef },
    { href: '#about', label: 'About', ref: refs.aboutRef },
    { href: '#features', label: 'Features', ref: refs.featuresRef },
    { href: '#gallery', label: 'Gallery', ref: refs.galleryRef },
    { href: '#team', label: 'Team', ref: refs.teamRef },
    { href: '#pricing', label: 'Pricing', ref: refs.pricingRef },
    { href: '#home', label: 'Dropdown', ref: refs.heroRef },
    { href: '#contact', label: 'Contact', ref: refs.contactRef }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <div className={`fixed top-0 z-30 w-full flex justify-between items-center px-3 py-5 xl:px-28 xl:py-7 ${isScrolled ? " bg-[#10058c]" : " bg-transparent"}`}>

        <div className='w-full flex justify-between items-center'>

          <div>
            <a className="text-white text-3xl font-bold raleway">Bootslander</a>
          </div>

          <div className="hidden xl:block">

            <ul className="flex justify-center items-center gap-10 text-zinc-300 font-normal text-[15px] ">

              {navlinks.map((link, index) => (

                <li key={index} className={`hover:text-white hover:border-green-500 px-0.5 py-1. poppins ${activeLink === link.href ? "border-b-2 border-green-500 text-white" : " border-b-2 border-transparent text-zinc-300"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.ref);
                    setActiveLink(link.href)
                  }}>
                  <a href={link.href}>{link.label}</a>
                </li>

              ))}

            </ul>

          </div>

        </div>

        <div ref={MenuRef}>

          <div className='xl:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ?

              <img src={close} alt="menubar" className='px-3' />
              :
              <img src={menubar} alt="menubar" className='px-3' />

            }

          </div>


          {isOpen &&
            <div className='bg-white rounded-lg absolute top-20 left-0 w-full xl:hidden'>
              <ul className="flex-col justify-center items-center space-y-2 text-zinc-700 font-medium text-lg pl-4 py-4">
                {navlinks.map((link) => (

                  <li className={` hover:text-green-500 px-0.5 py-1.5  ${activeLink === link.href ? "text-green-500" : " text-zinc-700"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.ref);
                      setActiveLink(link.href)
                      setIsOpen(false)
                    }}><a href={link.href}>{link.label}</a></li>
                ))}

              </ul>
            </div>
          }

        </div>

      </div>


    </>
  )
}

export default Navbar
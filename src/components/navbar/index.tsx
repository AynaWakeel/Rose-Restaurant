import { useEffect, useState } from 'react'
import menubar from '../../assets/icons/bars-solid-full.svg'
import close from '../../assets/icons/xmark-solid-full.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [activeLink,setActiveLink] = useState<string>('#home')

  const navlinks = [
    {href:'#home', label:'Home', ref:''},
    {href:'#about', label:'About', ref:''},
    {href:'#features', label:'Features', ref:''},
    {href:'#gallery', label:'Gallery', ref:''},
    {href:'#team', label:'Team', ref:''},
    {href:'#pricing', label:'Pricing', ref:''},
    {href:'#t', label:'Dropdown', ref:''},
    {href:'#contact', label:'Contact', ref:''}
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
        <div>
          <a className="text-white text-3xl font-bold raleway">Bootslander</a>
        </div>

        <div className="hidden xl:block">

          <ul className="flex justify-center items-center gap-10 text-zinc-300 font-normal text-[15px] ">

            {navlinks.map((link,index)=>(
            <li key={index} className={`hover:text-white hover:border-green-500 px-0.5 py-1. poppins ${activeLink === link.href ? "border-b-2 border-green-500 text-white" : " border-b-2 border-transparent text-zinc-300"}`} onClick={()=>setActiveLink(link.href)}><a href={link.href}>{link.label}</a></li>
            ))}

          </ul>

        </div>

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
               {navlinks.map((link)=>(

              <li className={` hover:text-green-500 px-0.5 py-1.5  ${activeLink === link.href ? "text-green-500" : " text-zinc-700"}`} onClick={()=>setActiveLink(link.href)}><a href={link.href}>{link.label}</a></li>
               ))}
             
            </ul>
          </div>
        }
      </div>


    </>
  )
}

export default Navbar
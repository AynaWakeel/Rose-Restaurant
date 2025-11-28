import cover from '../../assets/images/10002.jpg'
import Navbar from '../../components/navbar'
import Mobile from '../../assets/images/10003.png'
import { IoCaretForwardCircleOutline } from 'react-icons/io5'

interface Props {
  scrollToSection:(ref: React.RefObject<HTMLDivElement>) => void;
  refs:any;
}

const Hero:React.FC<Props> = ({scrollToSection,refs}) => {

  const background = {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <>

      <div style={background}>
        <Navbar 
        refs={refs}
        scrollToSection={scrollToSection}
        />
        <div ref={refs.heroRef} className="bg-[#1A1469]/95 relative">
          <div className=' w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-12 px-4 py-36 xl:px-28'>
            <div className='w-full lg:w-1/2 flex flex-col justify-start gap-8'>
              <h1 className='text-zinc-300 font-bold text-5xl/14 tracking-wide raleway'>Build Your Landing Page With <span className='text-white border-b-4 border-[#1ACC8D]'>Bootslander</span></h1>
              <p className='text-[22px] font-medium leading-8 text-zinc-300'>We are team of talented designers making websites with Bootstrap rftgyhjk dfghj frtgyhuj rdftgyh</p>
              <div className='flex justify-start items-center gap-5'>
                <button className='bg-[#1ACC8D] hover:bg-[#0fc786] rounded-4xl py-3 px-7 text-white text-[15px] font-light tracking-wider raleway'>Get Started</button>
                <div className='flex justify-start items-center gap-1'>
                  <IoCaretForwardCircleOutline className='text-4xl text-[#1ACC8D]' />
                  <span className='text-white text-base font-semibold tracking-wider raleway'>Watch Video</span>
                </div>
              </div>
            </div>

            <div>
              <img src={Mobile} alt='mobile' className='w-[400px] animated' />
            </div>

          </div>
        </div>

        <div className="hidden xl:block absolute w-full h-20 bottom-0 left-0 z-10">
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 22 180 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>

            <g className="wave1 fill-zinc-300 opacity-50">
               <use href="#wave-path" x="50" y="3"></use>
            </g>
            <g className="wave2 fill-zinc-200 opacity-30">
                <use href="#wave-path" x="50" y="0"></use>
            </g>
            <g className="wave3 fill-white opacity-100">
               <use href="#wave-path" x="50" y="9"></use>
            </g>

          </svg>
        </div>

      </div>

    </>
  )
}

export default Hero
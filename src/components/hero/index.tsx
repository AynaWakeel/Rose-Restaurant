import cover from '../../assets/images/10002.jpg'
import Navbar from '../navbar'
import Mobile from '../../assets/images/10003.png'
import { IoCaretForwardCircleOutline } from 'react-icons/io5'

const Hero = () => {

  const background = {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <>

      <div style={background}>
        <Navbar />
        <div className="bg-[#1A1469]/95 ">
          <div className=' w-full flex flex-col lg:flex-row justify-between items-center gap-12 px-4 py-36 xl:px-28'>
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
              <img src={Mobile} alt='mobile' className='w-[400px]' />
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Hero
import { FaXTwitter } from "react-icons/fa6"
import { FiInstagram } from "react-icons/fi"
import { IoLogoLinkedin } from "react-icons/io"
import { RiFacebookCircleFill } from "react-icons/ri"

const Footer = () => {
  return (
    <>

      <div className='bg-[#08005E] px-6 md:px-14 xl:px-20 pt-5 lg:pt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-8'>

          <div className="flex flex-col justify-around gap-4">
            <h5 className="text-white font-semibold text-3xl pb-7">Bootslander</h5>
            <div>
              <p className='text-white text-sm'>A108 Adam Street</p>
              <p className='text-white text-sm'>New York, NY 535022</p>
            </div>
            <div>
              <div className="flex justify-start items-center gap-2">
                <h5 className='text-white text-sm font-medium'>Phone:</h5>
                <h6 className='text-white text-sm'> +1 5589 55488 55</h6>
              </div>
              <div className="flex justify-start items-center gap-2">
                <h5 className='text-white text-sm font-medium'>Email:</h5>
                <h6 className='text-white text-sm'>info@example.com</h6>
              </div>
            </div>
            <div className='flex justify-start items-center gap-3 pt-2'>
              <span className=' border border-gray-300 rounded-full flex justify-center items-center p-2.5'><FaXTwitter className='text-zinc-400 text-lg' /></span>
              <span className=' border border-gray-300 rounded-full flex justify-center items-center p-2.5'><RiFacebookCircleFill className='text-zinc-400 text-lg' /></span>
              <span className=' border border-gray-300 rounded-full flex justify-center items-center p-2.5'><IoLogoLinkedin className='text-zinc-400 text-lg' /></span>
              <span className=' border border-gray-300 rounded-full flex justify-center items-center p-2.5'><FiInstagram className='text-zinc-400 text-lg' /></span>
            </div>
          </div>
          <div>
            <h5 className='text-lg text-white font-medium font-poppins pb-5'>Useful Links</h5>
            <ul className='flex flex-col gap-2'>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Home</a></li>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>About Us</a></li>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Services</a></li>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Terms of service</a></li>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className='text-lg text-white font-medium font-poppins pb-5'>Our Services</h5>
            <ul className='flex flex-col gap-2'>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Web Design</a></li>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Web Development</a></li>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Product Management</a></li>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Marketing</a></li>
              <li><a className='text-base text-zinc-300 cursor-pointer hover:text-[#0fc786] font-normal font-poppins'>Graphic Design</a></li>
            </ul>
          </div>
          <div>
            <h5 className='text-lg text-white font-medium font-poppins pb-5'>Newsletter</h5>
            <p className='text-white text-sm font-normal'>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <div className='flex justify-between rounded-md  border border-[#0fc786] w-full mt-6'>
              <input type='email' className=' outline-none text-base font-normal py-3 px-3 lg:px-4'  />
              <button className='bg-[#0fc786] text-white px-4 h-auto rounded-r-md text-sm'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='py-6 border-t border-[#26206e] w-full flex flex-col justify-center items-center gap-1.5'>
          <p className='text-sm font-poppins font-normal text-white roboto'>© Copyright <span className="font-semibold">Bootslander</span> All Rights Reserved</p>
          <p className='text-sm font-poppins font-normal text-white roboto'>Designed by <span className="text-[#1ACC8D]">BootstrapMade</span> Distributed By <span className="text-[#1ACC8D]">ThemeWagon</span></p>
        </div>
      </div>

    </>
  )
}

export default Footer
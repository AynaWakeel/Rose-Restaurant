import { GoInfinity } from 'react-icons/go'
import { BsCameraVideo, BsEye, BsPentagonFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { IoIosStarOutline, IoMdSettings } from 'react-icons/io'
import { SlGlobe } from 'react-icons/sl'
import { CiLight } from 'react-icons/ci'
import { TbActivity, TbArrowsShuffle } from 'react-icons/tb'
import { VscSymbolMethod } from 'react-icons/vsc'

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-3 py-5 xl:px-28 xl:py-16 bg-white">
       <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><BsEye className='text-4xl text-yellow-300'/></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

       <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><GoInfinity className='text-4xl text-blue-400' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

        <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><FaGraduationCap className='text-4xl text-pink-700' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

        <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><IoMdSettings className='text-4xl text-purple-400' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

         <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><TbArrowsShuffle className='text-4xl text-blue-400' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

       <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><IoIosStarOutline className='text-4xl text-orange-400' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

        <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><VscSymbolMethod className='text-4xl text-cyan-400' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

        <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><BsCameraVideo className='text-4xl text-blue-700' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>


         <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><BsPentagonFill className='text-4xl text-cyan-700' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

       <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><SlGlobe className='text-4xl text-pink-800' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

        <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><TbActivity className='text-4xl text-orange-500' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

        <div className="group flex justify-start items-center gap-3 border border-zinc-300 p-5 hover:border-[#1ACC8D]">
          <div><CiLight className='text-4xl text-green-400' /></div>
          <h4 className="text-[#040677] group-hover:text-[#1ACC8D] text-lg font-medium">Lorem ipsum</h4>
        </div>

      </div>
    </>
  )
}

export default Features
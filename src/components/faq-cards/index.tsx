import { IoIosArrowDown } from "react-icons/io"
import { RxQuestionMarkCircled } from "react-icons/rx"

const FaqCards = () => {
  return (
    <>

    <div className="flex justify-between items-center w-full bg-white p-5 my-5 shadow-xl/35 shadow-zinc-400">
      <div className="flex justify-start items-center gap-3">
        <RxQuestionMarkCircled className='text-[#1ACC8D] text-2xl' />
        <h4  className=" text-base md:text-sm lg:text-base xl:text-lg raleway font-medium text-[#040677] raleway">Non consectetur a erat nam at lectus urna duis?</h4>
      </div>
      <IoIosArrowDown className='text-[#1ACC8D] text-2xl ' />
    </div>

    {/* <div className=" bg-white pt-2">
      <p className="text-base font-normal leading-6 text-zinc-800 text-justify">Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
    </div> */}
    
    </>
  )
}

export default FaqCards
import { BsEmojiSmile } from "react-icons/bs"
import { HiUsers } from "react-icons/hi"
import { SlNotebook } from "react-icons/sl"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import CountUp from "../../components/countUp"

const CounterSec = () => {
    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center md:gap-3 bg-zinc-100 py-5 px-16 md:px-10 md:py-12 lg:px-14 xl:px-28">

                <div data-aos="fade-up"  data-aos-duration="1200"  data-aos-delay="200" className="relative pt-8 pb-4 px-8 rounded-md bg-white shadow-2xl/50 shadow-zinc-400 my-8 md:my-6 flex flex-col justify-center items-center gap-3">
                    <CountUp end={233}/>
                    <h5 className="text-lg font-light text-zinc-500">Happy Clients</h5>
                    <div>
                        <span className='bg-white shadow-2xl/40 shadow-zinc-600 absolute -top-1 left-1/2 -translate-1/2 rounded-full w-14 h-14 flex justify-center items-center hover:bg-[#0fc786] group'><BsEmojiSmile className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                    </div>
                </div>

                <div data-aos="fade-up"  data-aos-duration="1200"  data-aos-delay="300" className="relative pt-8 pb-4 px-8 rounded-md bg-white shadow-2xl/50 shadow-zinc-400 my-8 md:my-6 flex flex-col justify-center items-center gap-3">
                    <CountUp end={19}/>
                    <h5 className="text-lg font-light text-zinc-500">Hard Workers</h5>
                    <div>
                        <span className='bg-white shadow-2xl/40 shadow-zinc-600 absolute -top-1 left-1/2 -translate-1/2 rounded-full w-14 h-14 flex justify-center items-center hover:bg-[#0fc786] group'><HiUsers className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                    </div>
                </div>

                <div data-aos="fade-up"  data-aos-duration="1200"  data-aos-delay="400" className="relative pt-8 pb-4 px-8 rounded-md bg-white shadow-2xl/50 shadow-zinc-400 my-8 md:my-6 flex flex-col justify-center items-center gap-3">
                     <CountUp end={508}/>
                    <h5 className="text-lg font-light text-zinc-500">Projects</h5>
                    <div>
                        <span className='bg-white shadow-2xl/40 shadow-zinc-600 absolute -top-1 left-1/2 -translate-1/2 rounded-full w-14 h-14 flex justify-center items-center hover:bg-[#0fc786] group'><SlNotebook className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                    </div>
                </div>

                <div data-aos="fade-up"  data-aos-duration="1200"  data-aos-delay="500" className="relative pt-8 pb-4 px-8 rounded-md bg-white shadow-2xl/50 shadow-zinc-400 my-8 md:my-6 flex flex-col justify-center items-center gap-3">
                     <CountUp end={1463}/>
                    <h5 className="text-lg font-light text-zinc-500">Hours of Support</h5>
                    <div>
                        <span className='bg-white shadow-2xl/40 shadow-zinc-600 absolute -top-1 left-1/2 -translate-1/2 rounded-full w-14 h-14 flex justify-center items-center hover:bg-[#0fc786] group'><TfiHeadphoneAlt className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CounterSec
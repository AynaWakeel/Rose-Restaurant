import { HiArrowNarrowRight } from "react-icons/hi"
// import AboutCard from "../about-card"

const AboutUs = () => {
    return (
        <>
            <div className="gap-6 px-3 py-5 xl:px-28 xl:py-16">
                <div className='flex justify-between items-center w-full'>
                    <div className='w-2/5 pr-7'>
                        <h4 className="text-3xl raleway font-bold text-[#040677] pb-3 ">Ducimus rerum libero reprehenderit cumque</h4>
                        <p className="text-base font-normal leading-6 text-zinc-800 italic text-justify pb-5">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                         <button className='bg-[#1ACC8D] hover:bg-[#0fc786] rounded-lg py-2.5 px-6 text-white text-lg font-normal raleway flex justify-center items-center gap-2'>Read More <HiArrowNarrowRight className="text-xl"/></button>

                    </div>
                    <div className="w-3/5">
                    {/* <AboutCard/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
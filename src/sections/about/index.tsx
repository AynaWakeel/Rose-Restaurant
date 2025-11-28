import { HiArrowNarrowRight } from "react-icons/hi"
import AboutCard from "../../components/about-card";

interface aboutProps {
    refs:any;
}

const AboutUs:React.FC<aboutProps> = ({refs}) => {
    
    return (
        <>
            <div ref={refs.aboutRef} className=" py-5 px-16 md:px-10 md:py-12 lg:px-14 xl:px-28 xl:py-16">
                <div className='flex flex-col xl:flex-row justify-between items-center gap-6 w-full'>
                    <div className='xl:w-2/5 pr-7' data-aos="fade-up"  data-aos-duration="1500">
                        <button className='bg-[#F3FCF9] rounded-lg py-2.5 px-5 text-[#0fc786] text-base font-medium raleway flex justify-center items-center gap-2'>About Us</button>
                        <h4 className="text-3xl raleway font-bold text-[#040677] py-3 ">Ducimus rerum libero reprehenderit cumque</h4>
                        <p className="text-base font-normal leading-6 text-zinc-800 italic text-justify pb-5">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <button className='bg-[#1ACC8D] hover:bg-[#0fc786] rounded-lg py-2.5 px-6 text-white text-lg font-normal raleway flex justify-center items-center gap-2'>Read More <HiArrowNarrowRight className="text-xl" /></button>

                    </div>

                    <AboutCard/>

                </div>
            </div>
        </>
    )
}

export default AboutUs
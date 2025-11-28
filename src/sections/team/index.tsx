import { IoLogoLinkedin } from 'react-icons/io'
import img13 from '../../assets/images/10014.jpg'
import img14 from '../../assets/images/10015.jpg'
import img15 from '../../assets/images/10016.jpg'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'

interface teamProp {
    refs:any;
}

const Team:React.FC<teamProp> = ({refs}) => {
    return (
        <>


            <div ref={refs.teamRef} className="py-5 px-6 sm:px-20 md:px-10 md:py-12 lg:px-14 xl:px-28 xl:py-16 bg-white">
                <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="400" >
                    <div className="flex justify-start items-center gap-2">
                        <h5 className="text-base font-normal tracking-wider uppercase text-zinc-400">Team</h5>
                        <span className="w-40 h-1 border-b border-green-500"></span>
                    </div>
                    <h3 className="text-3xl raleway font-bold uppercase text-[#040677]">Check Our Team</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6  mt-14">

                    <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="500"  className='relative my-8 px-6 md:px-0'>
                        <img src={img13} alt="team"/>
                        <div className='py-5 px-4 bg-white shadow-xl/50 shadow-zinc-200 flex flex-col w-[350px] sm:w-[400px] md:w-[300px] lg:w-[260px] absolute -bottom-14 left-1/2 -translate-x-1/2'>
                            <h6 className='raleway text-[#040677] text-base font-bold pb-2'>Walter White</h6>
                            <span className=' border-b border-zinc-300 w-12'></span>
                            <div className='flex justify-between items-center'>
                                <p className='roboto text-xs xl:text-sm italic text-zinc-500 font-normal pt-2'>Chief Executive Officer</p>
                                <div className='flex items-center gap-2'>
                                    <FaXTwitter className='text-zinc-400 text-lg' />
                                    <RiFacebookCircleFill className='text-zinc-400 text-xl' />
                                    <FiInstagram className='text-zinc-400 text-lg' />
                                    <IoLogoLinkedin className='text-zinc-400 text-lg' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="600"  className='relative my-8 px-6 md:px-0'>
                        <img src={img14} alt="team" />
                        <div className='py-5 px-4 bg-white shadow-xl/50 shadow-zinc-200 flex flex-col w-[380px] absolute -bottom-14 left-1/2 -translate-x-1/2'>
                            <h6 className='raleway text-[#040677] text-base font-bold pb-2'>Walter White</h6>
                            <span className=' border-b border-zinc-300 w-12'></span>
                            <div className='flex justify-between items-center'>
                                <p className='roboto text-sm italic text-zinc-500 font-normal pt-2'>Chief Executive Officer</p>
                                <div className='flex items-center gap-2'>
                                    <FaXTwitter className='text-zinc-400 text-lg' />
                                    <RiFacebookCircleFill className='text-zinc-400 text-xl' />
                                    <FiInstagram className='text-zinc-400 text-lg' />
                                    <IoLogoLinkedin className='text-zinc-400 text-lg' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="700"  className='relative my-8 px-6 md:px-0'>
                        <img src={img15} alt="team" />
                        <div className='py-5 px-4 bg-white shadow-xl/50 shadow-zinc-200 flex flex-col w-[380px] absolute -bottom-14 left-1/2 -translate-x-1/2'>
                            <h6 className='raleway text-[#040677] text-base font-bold pb-2'>Walter White</h6>
                            <span className=' border-b border-zinc-300 w-12'></span>
                            <div className='flex justify-between items-center'>
                                <p className='roboto text-sm italic text-zinc-500 font-normal pt-2'>Chief Executive Officer</p>
                                <div className='flex items-center gap-2'>
                                    <FaXTwitter className='text-zinc-400 text-lg' />
                                    <RiFacebookCircleFill className='text-zinc-400 text-xl' />
                                    <FiInstagram className='text-zinc-400 text-lg' />
                                    <IoLogoLinkedin className='text-zinc-400 text-lg' />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Team
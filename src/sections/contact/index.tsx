import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import { MdMailOutline } from "react-icons/md"

interface contactprop {
    refs:any;
}

const Contact:React.FC<contactprop> = ({refs}) => {
    return (
        <>

            <div ref={refs.contactRef} className="py-5 px-16 md:px-10 md:py-12 lg:px-14 xl:px-28 xl:py-16 bg-white">
                <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="200">
                    <div className="flex justify-start items-center gap-2">
                        <h5 className="text-base font-normal tracking-wider uppercase text-zinc-400">Contact</h5>
                        <span className="w-40 h-1 border-b border-green-500"></span>
                    </div>
                    <h3 className="text-3xl raleway font-bold uppercase text-[#040677]">Check Our Contact</h3>
                </div>

                <div className="flex flex-col lg:flex-row  justify-between items-start gap-10 xl:gap-1 mt-14 w-full">

                    <div className="flex flex-col justify-start items-start gap-8">
                        <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="400" className="flex justify-start items-center gap-5">
                            <span className='bg-[#F3FCF9] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#0fc786] group'><IoLocationOutline className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                            <div>
                                <h4 className="text-xl raleway font-semibold text-[#040677] pb-1 raleway">Address</h4>
                                <p className="text-sm font-normal text-zinc-800 italic text-justify roboto">A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                         <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="500" className="flex justify-start items-center gap-5">
                            <span className='bg-[#F3FCF9] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#0fc786] group'><IoCallOutline className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                            <div>
                                <h4 className="text-xl raleway font-semibold text-[#040677] pb-1 raleway">Call Us</h4>
                                <p className="text-sm font-normal text-zinc-800 italic text-justify roboto">+1 5589 55488 55</p>
                            </div>
                        </div>

                         <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="600" className="flex justify-start items-center gap-5">
                            <span className='bg-[#F3FCF9] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#0fc786] group'><MdMailOutline className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                            <div>
                                <h4 className="text-xl raleway font-semibold text-[#040677] pb-1 raleway">Email Us</h4>
                                <p className="text-sm font-normal text-zinc-800 italic text-justify roboto">info@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="600" className="flex flex-col justify-start items-center gap-4 w-full lg:w-2/3">
                        <div className="flex justify-between items-center gap-3 w-full">
                            <input type="text" placeholder="Your name" className="border border-zinc-200 p-3 text-sm w-1/2" />
                            <input type="email" placeholder="Your Email" className="border border-zinc-200 p-3 text-sm w-1/2" />
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="Your name" className="border border-zinc-200 p-3 text-sm w-full" />
                        </div>
                        <div className="w-full">
                            <textarea placeholder="Message" className="border border-zinc-200 p-3 text-sm w-full" rows={6}></textarea>
                        </div>
                        <div>
                            <button className='bg-[#1ACC8D] hover:bg-[#0fc786] rounded-4xl py-3 px-7 text-white text-base font-medium tracking-wider raleway'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
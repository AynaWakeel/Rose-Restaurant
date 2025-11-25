import { MdDone } from 'react-icons/md'
import img1 from '../../assets/images/10004.png'
import img2 from '../../assets/images/10005.png'
import img3 from '../../assets/images/10006.png'
import img4 from '../../assets/images/10007.png'


const Details = () => {
    return (
        <>

            <div className="py-5 px-16 md:px-10 lg:px-14 xl:px-28 xl:py-16 bg-white">
                <div className="pb-6">
                    <div className="flex justify-start items-center gap-2">
                        <h5 className="text-base font-normal tracking-wider uppercase text-zinc-400">Details</h5>
                        <span className="w-40 h-1 border-b border-green-500"></span>
                    </div>
                    <h3 className="text-3xl raleway font-bold uppercase text-[#040677]">Check Our Details</h3>
                </div>

                <div className="flex flex-col gap-14 lg:gap-6 xl:gap-20 pt-8">
                    <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-6 w-full'>
                        <div><img src={img1} alt="img" className='w-[500px] md:w-[550px]'/></div>
                        <div className='w-full lg:w-4/5 xl:w-3/5 xl:pl-7'>
                            <h4 className="text-2xl raleway font-bold text-[#040677] pb-3 ">Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h4>
                            <p className="text-base font-normal leading-6 text-zinc-800 italic pb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                           <ul>
                            <li className="text-base font-normal leading-6 text-zinc-800 pb-4 flex justify-start items-center gap-2"><MdDone className='text-[#1ACC8D]'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li className="text-base font-normal leading-6 text-zinc-800 pb-4 flex justify-start items-center gap-2"><MdDone className='text-[#1ACC8D]'/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li className="text-base font-normal leading-6 text-zinc-800 pb-4 flex justify-start items-center gap-2"><MdDone className='text-[#1ACC8D]'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                           </ul>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-6 w-full'>
                        <div className='w-full lg:w-4/5 xl:w-3/5 pr-7'>
                            <h4 className="text-2xl raleway font-bold text-[#040677] pb-3 ">Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h4>
                            <p className="text-base font-normal leading-6 text-zinc-800 italic pb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="text-base font-normal leading-6 text-zinc-800 italic text-justify">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div><img src={img2} alt="img" className='w-[550px]'/></div>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-6 w-full'>
                        <div><img src={img3} alt="img" className='w-[500px] lg:w-[550px]'/></div>
                        <div className='w-full lg:w-4/5 xl:w-3/5 pl-7'>
                            <h4 className="text-2xl raleway font-bold text-[#040677] pb-3 ">Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h4>
                            <p className="text-base font-normal leading-6 text-zinc-800 italic pb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="text-base font-normal leading-6 text-zinc-800 italic text-justify">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-6 w-full'>
                        <div className='w-full lg:w-4/5 xl:w-3/5 pr-7'>
                            <h4 className="text-2xl raleway font-bold text-[#040677] pb-3 ">Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h4>
                            <p className="text-base font-normal leading-6 text-zinc-800 italic pb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="text-base font-normal leading-6 text-zinc-800 italic text-justify">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div><img src={img4} alt="img" className='w-[500px] lg:w-[550px]'/></div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Details
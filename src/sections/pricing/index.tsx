import { MdClose, MdDone } from "react-icons/md"

interface pricingProp {
    refs: any;
}

const Pricing: React.FC<pricingProp> = ({ refs }) => {
    return (
        <>

            <div ref={refs.pricingRef} className="py-5 px-16 md:px-10 md:py-12 lg:px-14 xl:px-28 xl:py-16 bg-white">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" >
                    <div className="flex justify-start items-center gap-2">
                        <h5 className="text-base font-normal tracking-wider uppercase text-zinc-400">Pricing</h5>
                        <span className="w-40 h-1 border-b border-green-500"></span>
                    </div>
                    <h3 className="text-3xl raleway font-bold uppercase text-[#040677]">Check Our Pricing</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 mt-14">

                    <div data-aos="zoom-in"  data-aos-duration="600"  data-aos-delay="400"  className="bg-[#F6FDFB] p-10 rounded-lg ">

                        <h4 className="text-xl raleway font-semibold text-[#040677] pb-3 raleway">Free Plan</h4>
                        <p className="text-base font-normal leading-6 text-zinc-800 italic text-justify roboto">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                        <div className="pt-5 flex items-end gap-2">
                            <span className="text-5xl font-semibold text-[#1ACC8D] raleway"><sup>$</sup>0</span>
                            <span className="text-xl font-normal text-zinc-500 raleway">/</span>
                            <span className="text-xl font-normal text-zinc-500 raleway">month</span>
                        </div>
                        <div className="py-8 flex flex-col items-center gap-2">
                            <button className='bg-[#F3FCF9] w-full border border-zinc-800 rounded-lg py-3 px-5 text-zinc-700 text-base font-medium raleway flex justify-center items-center gap-2 raleway'>Start a free trial</button>
                            <span className="text-sm font-medium raleway  text-zinc-700 roboto">No credit card required</span>
                        </div>
                        <ul>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' />Quam adipiscing vitae proin</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D]' /> Quam adipiscing vitae proin</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' /> Nulla at volutpat diam uteera</li>
                            <li className="text-base font-normal leading-6 text-zinc-400 pb-4 flex justify-start items-center gap-2 line-through roboto"><MdClose className='text-zinc-400 ' />  Pharetra massa massa ultricies</li>
                            <li className="text-base font-normal leading-6 text-zinc-400 pb-4 flex justify-start items-center gap-2 line-through roboto"><MdClose className='text-zinc-400 ' />  Massa ultricies mi quis hendrerit</li>
                            <li className="text-base font-normal leading-6 text-zinc-400 pb-4 flex justify-start items-center gap-2 line-through roboto"><MdClose className='text-zinc-400 ' /> Voluptate id voluptas qui sed aperiam rerum </li>
                            <li className="text-base font-normal leading-6 text-zinc-400 pb-4 flex justify-start items-center gap-2 line-through roboto"><MdClose className='text-zinc-400 ' /> Iure nihil dolores recusandae odit voluptatibus</li>
                        </ul>

                    </div>

                    <div data-aos="zoom-in"  data-aos-duration="600"  data-aos-delay="500" className="bg-[#F6FDFB] p-10 rounded-lg relative">
                        <div className="absolute top-2.5 right-2.5">
                            <button className='bg-[#1ACC8D] hover:bg-[#0fc786] rounded-lg py-2 px-4 text-white text-sm font-medium raleway flex justify-center items-center gap-2'>Popular</button>
                        </div>
                        <h4 className="text-xl raleway font-semibold text-[#040677] pb-3 raleway">Business Plan</h4>
                        <p className="text-base font-normal leading-6 text-zinc-800 text-justify roboto">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                        <div className="pt-5 flex items-end gap-2">
                            <span className="text-5xl font-semibold text-[#1ACC8D] raleway"><sup>$</sup>29</span>
                            <span className="text-xl font-normal text-zinc-500 raleway">/</span>
                            <span className="text-xl font-normal text-zinc-500 raleway">month</span>
                        </div>
                        <div className="py-8 flex flex-col items-center gap-2">
                            <button className='bg-[#F3FCF9] w-full border border-zinc-800 rounded-lg py-3 px-5 text-zinc-700 text-base font-medium raleway flex justify-center items-center gap-2 raleway'>Start a free trial</button>
                            <span className="text-sm font-medium raleway  text-zinc-700 roboto">No credit card required</span>
                        </div>
                        <ul>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D]' />Quam adipiscing vitae proin</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' /> Quam adipiscing vitae proin</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' /> Nulla at volutpat diam uteera</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' />Pharetra massa massa ultricies</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' /> Massa ultricies mi quis hendrerit</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' />Voluptate id voluptas qui sed aperiam rerum </li>
                            <li className="text-base font-normal leading-6 text-zinc-400 pb-4 flex justify-start items-center gap-2 roboto line-through"><MdClose className='text-zinc-400' /> Iure nihil dolores recusandae odit voluptatibus</li>
                        </ul>

                    </div>

                    <div data-aos="zoom-in"  data-aos-duration="600"  data-aos-delay="600" className="bg-[#F6FDFB] p-10 rounded-lg ">

                        <h4 className="text-xl raleway font-semibold text-[#040677] pb-3 raleway">Developer Plan</h4>
                        <p className="text-base font-normal leading-6 text-zinc-800 text-justify roboto">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                        <div className="pt-5 flex items-end gap-2">
                            <span className="text-5xl font-semibold text-[#1ACC8D] raleway"><sup>$</sup>49</span>
                            <span className="text-xl font-normal text-zinc-500 raleway">/</span>
                            <span className="text-xl font-normal text-zinc-500 raleway">month</span>
                        </div>
                        <div className="py-8 flex flex-col items-center gap-2">
                            <button className='bg-[#F3FCF9] w-full border border-zinc-800 rounded-lg py-3 px-5 text-zinc-700 text-base font-medium raleway flex justify-center items-center gap-2 raleway'>Start a free trial</button>
                            <span className="text-sm font-medium raleway  text-zinc-700 roboto">No credit card required</span>
                        </div>
                        <ul>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' />Quam adipiscing vitae proin</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' /> Quam adipiscing vitae proin</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' /> Nulla at volutpat diam uteera</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' />Pharetra massa massa ultricies</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' /> Massa ultricies mi quis hendrerit</li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' />Voluptate id voluptas qui sed aperiam rerum </li>
                            <li className="text-base font-normal leading-6 text-zinc-500 pb-4 flex justify-start items-center gap-2 roboto"><MdDone className='text-[#1ACC8D] ' />Iure nihil dolores recusandae odit voluptatibus</li>
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Pricing
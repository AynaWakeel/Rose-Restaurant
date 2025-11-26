import img5 from '../../assets/images/10018.jpg'
import img6 from '../../assets/images/10019.jpg'
import img7 from '../../assets/images/10020.jpg'
import img8 from '../../assets/images/10021.jpg'
import img9 from '../../assets/images/10022.jpg'
import img10 from '../../assets/images/10023.jpg'
import img11 from '../../assets/images/10024.jpg'
import img12 from '../../assets/images/10025.jpg'

const Gallery = () => {
    return (
        <>


            <div className="py-5 px-16 md:px-10 md:py-12 lg:px-14 xl:px-28 xl:py-16 bg-white">
                <div>
                    <div className="flex justify-start items-center gap-2">
                        <h5 className="text-base font-normal tracking-wider uppercase text-zinc-400">Gallery</h5>
                        <span className="w-40 h-1 border-b border-green-500"></span>
                    </div>
                    <h3 className="text-3xl raleway font-bold uppercase text-[#040677]">Check Our Gallery</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-1 mt-14">
                    <div className='overflow-hidden'><img src={img5} alt="img" className='transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-107'/></div>
                    <div className='overflow-hidden'><img src={img6} alt="img" className='transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-107'/></div>
                    <div className='overflow-hidden'><img src={img7} alt="img" className='transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-107'/></div>
                    <div className='overflow-hidden'><img src={img8} alt="img" className='transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-107'/></div>
                    <div className='overflow-hidden'><img src={img9} alt="img" className='transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-107'/></div>
                    <div className='overflow-hidden'><img src={img10} alt="img" className='transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-107'/></div>
                    <div className='overflow-hidden'><img src={img11} alt="img" className='transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-107'/></div>
                    <div className='overflow-hidden'><img src={img12} alt="img" className='transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-107'/></div>
                </div>
            </div>

        </>
    )
}

export default Gallery
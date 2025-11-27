import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'
import cover from '../../assets/images/10008.jpg'
import client1 from '../../assets/images/10009.jpg'
import client2 from '../../assets/images/10010.jpg'
import client3 from '../../assets/images/10011.jpg'
import client4 from '../../assets/images/10012.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Clients = () => {


  const background = {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '70vh',
    backgroundPosition: 'center'
  }

  return (
    <>

      <div style={background}>
        <div className="bg-[#1A1469]/75 h-full flex flex-col justify-center items-center w-full">

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full max-w-3xl"
           
          >
            <SwiperSlide>
              <div className='w-full px-10'>
                <div className='flex flex-col justify-center items-center gap-0'>
                  <span className='w-28 h-28 bg-[#2C306B] rounded-full flex justify-center items-center mb-4'>
                    <img src={client1} alt='photo' className='rounded-full w-25 h-25' />
                  </span>
                  <h4 className='text-white text-xl font-semibold'>Sara Whilson</h4>
                  <h6 className='text-zinc-300 text-sm font-normal'>Store owner</h6>
                </div>
                <div className='flex justify-center items-center py-4'>
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                </div>
                <div className='text-center mb-18'>
                  <p className='text-base text-white inline'>

                    <FaQuoteLeft className='text-lg text-zinc-300 inline-block mr-3' />
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <FaQuoteRight className='text-lg text-zinc-300 inline-block ml-3' />

                  </p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-full px-10'>
                <div className='flex flex-col justify-center items-center gap-0'>
                  <span className='w-28 h-28 bg-[#2C306B] rounded-full flex justify-center items-center mb-4'>
                    <img src={client2} alt='photo' className='rounded-full w-25 h-25' />
                  </span>
                  <h4 className='text-white text-xl font-semibold'>Sara Whilson</h4>
                  <h6 className='text-zinc-300 text-sm font-normal'>Store owner</h6>
                </div>
                <div className='flex justify-center items-center py-4'>
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                </div>
                <div className='text-center mb-18'>
                  <p className='text-base text-white inline'>

                    <FaQuoteLeft className='text-lg text-zinc-300 inline-block mr-3' />
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <FaQuoteRight className='text-lg text-zinc-300 inline-block ml-3' />

                  </p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-full px-10'>
                <div className='flex flex-col justify-center items-center gap-0'>
                  <span className='w-28 h-28 bg-[#2C306B] rounded-full flex justify-center items-center mb-4'>
                    <img src={client3} alt='photo' className='rounded-full w-25 h-25' />
                  </span>
                  <h4 className='text-white text-xl font-semibold'>Sara Whilson</h4>
                  <h6 className='text-zinc-300 text-sm font-normal'>Store owner</h6>
                </div>
                <div className='flex justify-center items-center py-4'>
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                </div>
                <div className='text-center mb-18'>
                  <p className='text-base text-white inline'>

                    <FaQuoteLeft className='text-lg text-zinc-300 inline-block mr-3' />
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <FaQuoteRight className='text-lg text-zinc-300 inline-block ml-3' />

                  </p>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-full px-10'>
                <div className='flex flex-col justify-center items-center gap-0'>
                  <span className='w-28 h-28 bg-[#2C306B] rounded-full flex justify-center items-center mb-4'>
                    <img src={client4} alt='photo' className='rounded-full w-25 h-25' />
                  </span>
                  <h4 className='text-white text-xl font-semibold'>Sara Whilson</h4>
                  <h6 className='text-zinc-300 text-sm font-normal'>Store owner</h6>
                </div>
                <div className='flex justify-center items-center py-4'>
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                  <FaStar className='text-yellow-300 text-xl' />
                </div>
                <div className='text-center mb-18'>
                  <p className='text-base text-white inline'>

                    <FaQuoteLeft className='text-lg text-zinc-300 inline-block mr-3' />
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <FaQuoteRight className='text-lg text-zinc-300 inline-block ml-3' />

                  </p>
                </div>

              </div>
            </SwiperSlide>


          </Swiper>
        </div>
      </div>


    </>
  )
}

export default Clients
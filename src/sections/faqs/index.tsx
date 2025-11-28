import question from '../../assets/images/10017.jpg'
import FaqCards from '../../components/faq-cards'

const FAQS = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 xl:gap-20 bg-zinc-100 py-5 px-16 md:px-5 md:py-12 xl:py-16">
        <div className='xl:pl-10 w-full'>
          <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="400">
              <h4 className="text-3xl raleway font-bold text-[#040677] py-3 "><span className='font-normal'>Frequently Asked </span> Questions</h4>
              <p className="text-base font-normal leading-6 text-zinc-800 text-justify pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
          </div>
          <div>
            <FaqCards/>
          </div>
        </div>
        <div data-aos="zoom-in"  data-aos-duration="800"  data-aos-delay="400" className='flex justify-end'><img src={question} alt="img" className='w-full '/></div>
      </div>
    </>
  )
}

export default FAQS
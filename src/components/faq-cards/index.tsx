import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { RxQuestionMarkCircled } from "react-icons/rx"
import { FaqCardsData } from "../../helpers/dummyData"

const FaqCards = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(1)
  const handleOpen = (id:number) =>{
    if(faqOpen === id){
       setFaqOpen(null)
    }else{
      setFaqOpen(id)
    }
  }
  return (
    <>

    {FaqCardsData.map((content)=>(

      <div data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="500" className=" w-full bg-white p-5 my-5 shadow-xl/35 shadow-zinc-400">

        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-3">
            <RxQuestionMarkCircled className='text-[#1ACC8D] text-2xl' />
            <h4 className=" text-base md:text-sm lg:text-base xl:text-lg raleway font-medium text-[#040677] raleway">{content.question}</h4>
          </div>
          <IoIosArrowDown className='text-[#1ACC8D] text-2xl ' onClick={()=>handleOpen(content.id)}/>
        </div>

        {faqOpen === content.id && 
        
        <div className=" bg-white pt-2">
          <p className="text-base font-normal leading-6 text-zinc-800 text-justify">{content.answer}</p>
        </div>
        }

      </div>

    ))}

    </>
  )
}

export default FaqCards
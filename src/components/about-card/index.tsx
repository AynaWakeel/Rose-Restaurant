import { BsGraphUpArrow } from "react-icons/bs"

const AboutCard = () => {
  return (
    <>
      <div className="py-10 px-8 rounded-lg bg-white shadow-2xl/50 shadow-zinc-400">
        <span className='bg-[#F3FCF9] rounded-full w-20 h-20 flex justify-center items-center hover:bg-[#0fc786] group'><BsGraphUpArrow className="text-2xl text-[#0fc786] group-hover:text-white"/></span>
        <h4 className="text-2xl raleway font-bold text-[#040677] py-3 ">Eius provident</h4>
        <p className="text-base font-normal text-zinc-800 pb-5">Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
      </div>
    </>
  )
}

export default AboutCard
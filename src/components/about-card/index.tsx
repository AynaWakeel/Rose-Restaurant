import { BsBuildings, BsGraphUpArrow, BsFileBarGraph , } from "react-icons/bs"
import { aboutCardsdata } from "../../helpers/dummyData"
import { BiShapeSquare } from "react-icons/bi";

const icons: any = {
  BsBuildings: BsBuildings,
  BsFileBarGraph: BsFileBarGraph,
  BsGraphUpArrow: BsGraphUpArrow,
  BiShapeSquare :BiShapeSquare
};


const AboutCard = () => {
  const firstColumn = aboutCardsdata.slice(0, 2);
  const secondColumn = aboutCardsdata.slice(2);
  return (
    <>

      <div className="w-full xl:w-3/5 flex flex-col md:flex-row  gap-6">

        <div className="flex flex-col gap-6 mt-10"  data-aos="fade-up"  data-aos-duration="1800">

          {firstColumn.map((content) => {

            const Icon = icons[content.icon];

            return (

              <div className="py-10 px-8 rounded-lg bg-white shadow-2xl/50 shadow-zinc-400" >
                <span className='bg-[#F3FCF9] rounded-full w-20 h-20 flex justify-center items-center hover:bg-[#0fc786] group'><Icon className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                <h4 className="text-2xl raleway font-bold text-[#040677] py-3 ">{content.heading}</h4>
                <p className="text-base font-normal text-zinc-800 pb-5">{content.desc}</p>
              </div>

            )
          })}

        </div>
        <div className="flex flex-col gap-6"  data-aos="fade-up"  data-aos-duration="1900">

          {secondColumn.map((content) => {

            const Icon = icons[content.icon];

            return (

              <div className="py-10 px-8 rounded-lg bg-white shadow-2xl/50 shadow-zinc-400">
                <span className='bg-[#F3FCF9] rounded-full w-20 h-20 flex justify-center items-center hover:bg-[#0fc786] group'><Icon className="text-2xl text-[#0fc786] group-hover:text-white" /></span>
                <h4 className="text-2xl raleway font-bold text-[#040677] py-3 ">{content.heading}</h4>
                <p className="text-base font-normal text-zinc-800 pb-5">{content.desc}</p>
              </div>

            )
          })}

        </div>
      </div>

    </>
  )
}

export default AboutCard
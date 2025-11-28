import { IoArrowUp } from "react-icons/io5";

interface Moveprop {
    scrollToSection:(ref: React.RefObject<HTMLDivElement>) => void;
    refs:any;
}

const MoveUp:React.FC<Moveprop> = ({scrollToSection,refs}) => {
  return (
    <>
      <div>
        <button className="fixed bottom-4 right-3 z-20 px-3.5 py-3 rounded-md bg-[#1ACC8D] cursor-pointer"
        onClick={(e)=>{
            e.preventDefault();
            scrollToSection(refs.heroRef);
        }}
        >
            <IoArrowUp className="text-white text-lg font-bold"/>
        </button>
      </div>
    </>
  )
}

export default MoveUp

import { IndorPlant } from "../../icons"
const TreeBox = ({icon, title, description}) => {
  return (
    <div className='pt-5 pl-8 pr-10 pb-26 max-w-[350px] rounded-[3%] border-1 border-black/3 boxShadow bg-white hover:bg-primary  group'>
        <div className="py-4 px-8">
        <IndorPlant className={`group-hover:stroke-white group-hover:fill-white`}/>
        </div>
        <div className='pt-3 pl-5'>
            <h4 className="text-h4 group-hover:text-white">Indoor Plants</h4>
            <p className='max-w-[259px] pt-5 text-paragraph group-hover:text-white'>Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants</p>
   
        </div>
    </div>
  )
}

export default TreeBox
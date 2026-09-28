import { Bamboo } from "../../icons"

const TreeTwo = () => {
  return (
    <div className='pt-5 pl-8 pr-10 pb-26 max-w-[350px] rounded-[3%] border-1 border-black/3 bg-white boxShadow hover:bg-primary  group'>
        <div className="py-4 px-8">
          <Bamboo className={`group-hover:stroke-white group-hover:fill-white`}/>
        </div>
        <div className='pt-3 pl-5'>
            <h4 className="text-h4 group-hover:text-white">Plants Pots</h4>
            <p className='max-w-[259px] pt-5 text-paragraph group-hover:text-white'>Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor</p>
   
        </div>
    </div>
  )
}

export default TreeTwo
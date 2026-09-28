import React from 'react'
import WaterPlant from '../../icons/waterPlant'

const TreeFour = () => {
  return (
     <div className='pt-5 pl-8 pr-10 max-w-[350px] rounded-[3%] border-1 border-black/3 boxShadow bg-white hover:bg-primary  group'>
        <div className="py-4 px-8">
            <WaterPlant className={`group-hover:stroke-white group-hover:fill-white`}/>
        </div>
        <div className='pt-3 pl-5'>
            <h4 className="text-h4 group-hover:text-white">Always Fresh</h4>
            <p className='max-w-[259px] pt-5 text-paragraph group-hover:text-white'>Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.</p>
   
        </div>
    </div>
  )
}

export default TreeFour
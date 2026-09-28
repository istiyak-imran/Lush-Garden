import React from 'react'
import KnifePlant from '../../icons/knifePlant'

const TreeSix = () => {
  return (
    <div>
         <div className='pt-5 pl-8 pr-10 pb-22 max-w-[350px] rounded-[3%] border-1 border-black/3 boxShadow bg-white hover:bg-primary  group'>
        <div className="py-4 px-8">
          <KnifePlant className={`group-hover:stroke-white group-hover:fill-white`}/>
        </div>
        <div className='pt-3 pl-5'>
            <h4 className="text-h4 group-hover:text-white">Quality Product</h4>
            <p className='max-w-[259px] pt-5 text-paragraph group-hover:text-white'>We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs</p>
   
        </div>
    </div>
    </div>
  )
}

export default TreeSix
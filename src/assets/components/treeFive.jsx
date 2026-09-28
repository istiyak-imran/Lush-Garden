import React from 'react'
import HomePlant from '../../icons/homePlant'

const TreeFive = () => {
  return (
    <div>
     <div className='pt-5 pl-8 pr-10 pb-30 max-w-[350px] rounded-[3%] border-1 border-black/3 boxShadow bg-white hover:bg-primary  group'>
        <div className="py-4 px-8">
            <HomePlant className={`group-hover:stroke-white group-hover:fill-white`}/>
        </div>
        <div className='pt-3 pl-5'>
            <h4 className="text-h4 group-hover:text-white">Work Smart</h4>
            <p className='max-w-[259px] pt-5 text-paragraph group-hover:text-white'>We work smart, using innovative techniques and technology to streamline our processes</p>
        </div>
    </div>
    </div>
  )
}

export default TreeFive
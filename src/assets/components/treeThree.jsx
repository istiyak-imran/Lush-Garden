
import LeafPlant from '../../icons/leafPlant'

const TreeThree = () => {
  return (
    <div className='pt-5 pl-8 pr-10 pb-6 max-w-[350px] max-h-[379px] rounded-[3%] border-1 border-black/3 boxShadow bg-white hover:bg-primary  group'>
        <div className="py-4 px-8">
          <LeafPlant className={`group-hover:stroke-white group-hover:fill-white`}/>
        </div>
        <div className='pt-3 pl-5'>
            <h4 className="text-h4 group-hover:text-white">Quality Product</h4>
            <p className='max-w-[259px] pt-5 pb-19 text-paragraph group-hover:text-white'>Our flowers are of the highest quality, carefully selected and sourced from reputable</p>
   
        </div>
    </div>
  )
}

export default TreeThree
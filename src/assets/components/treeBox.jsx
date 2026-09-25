
import Indoor from "../Indoor.png"
const TreeBox = () => {
  return (
    <div className='pt-5 pl-8 pr-10 pb-26 max-w-[350px] rounded-[3%] border-1 border-black/3 bg-white boxShadow'>
        <div>
        <img src={Indoor} alt="indoor" className='py-4 px-8'/>
        </div>
        <div className='pt-3 pl-5'>
            <h4>Indoor Plants</h4>
            <p className='max-w-[259px] pt-5'>Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants</p>
   
        </div>
    </div>
  )
}

export default TreeBox
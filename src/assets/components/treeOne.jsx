import Indoor from "../Indoor.png"
const TreeOne = () => {
  return (
    <div className='pt-5 pl-8 pr-10 pb-26 max-w-[350px] rounded-[3%] border-1 border-black/3 bg-white boxShadow'>
        <div>
        <img src={Indoor} alt="indoor" className='py-4 px-8'/>
        </div>
        <div className='pt-3 pl-5'>
            <h4>Outdoor Plants</h4>
            <p className='max-w-[259px] pt-5'>Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.</p>
   
        </div>
    </div>
  )
}

export default TreeOne
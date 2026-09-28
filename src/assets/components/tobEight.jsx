import tobEight from '../tob-1.png'
import Button from './button'
import ImageToggle from './imageToggle'

const TobEight= () => {
  return (
    <div className='max-w-[280px] relative'>
        <div className='p-2 bg-white absolute top-[15px] right-[15px] rounded-[50%]'>
        <ImageToggle />
        </div>
        <img src={tobEight} alt="tob-1"/>
        <div className='flex items-center gap-10 px-5 py-4'>
            <div>
                <h6>Cactus Plant</h6>
                 <div className='flex gap-2 items-center '>
                    <del className='text-paragraph font-normal text-[12px]'>($10)</del>
                    <h5 className='text-h4 font-bold text-[12px]'>$8</h5>
                 </div>
            </div>
            <Button className={`border-2 border-h4 rounded-[3px]`}><h5 className='text-h4 font-black text-[12px]  py-2 px-6 hover:text-bdyclr'>Buy Now</h5></Button>
        </div>
    </div>
  )
}

export default TobEight
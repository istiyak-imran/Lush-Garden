import BannerThree from '../banner-3.png'
import Button from './button.jsx'

const Email = () => {
  return (
    <div className='py-30 relative'>
      <img src={BannerThree} alt="banner" />

      <div className='absolute top-[248px] left-[120px] '>
        <div className='grid grid-cols-2 gap-6'>
          <div className='max-w-[560px]'><h2 className='text-white text-[32px] font-Lato font-bold'>Enter your email address for our mailing Promo or other interesting things</h2></div>

          <div className='grid grid-cols-2 gap-6 pt-3'>
            <div className='border-2 border-white rounded-[5px] py-3 px-6  max-w-[475px]  max-h-12'>
              <input type="email" placeholder='Enter your email' className='placeholder:text-white placeholder:font-medium placeholder:text-[16px]' />
            </div>
            <div>
              <Button className={"py-3 px-11 bg-primary rounded-[5px]"}><h5 className='text-[16px] text-white font-Raleway'>Submit</h5></Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Email
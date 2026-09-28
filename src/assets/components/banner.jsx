import Section from './section';
import bannerImage from'../banner.jpg'
import Button from './button';
import Vector from "../Vector.svg"
const Banner = () => {
  const styles = {
    background: `url(${bannerImage}) no-repeat center/cover`,
  };
  
  return (
    <Section style={styles} relative>
       <div className='w-[719px] mx-auto pt-[211px] '><h1>  Beauty Delivered to You</h1></div>
      <div className='w-[787px] mx-auto'>
        <h5 className='text-center font-Poppins font-medium text-[18px] leading-[140%] text-pasage py-10'>Nature's beauty is just a click away with our online flower and plant shop. 
         We offer a wide variety of flowers that will bring a touch of nature to your home!</h5>
      </div>
      <div className='pb-[400px] flex justify-center gap-3'>
        <Button className={`rounded-[3px] border-2 border-primary bg-primary`}>
          <h5 className='py-[11px] px-[50px] font-Lato font-semibold text-[14px] text-bacground'>Book Now</h5>
          </Button> 
        <Button className={`rounded-[3px] border-2 border-bacground`} >
          <img src={Vector} alt="vector" className='pl-[35px]' />
          <h5 className='py-[11px] pr-[35px] font-Lato font-semibold text-[14px] text-bacground'>Watch Video</h5>
          </Button>
      </div>
    </Section>
  )
}

export default Banner
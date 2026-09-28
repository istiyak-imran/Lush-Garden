import Section from './section'
import Instragram from '../Instagram.png'
import FaceBook from '../Facebook.png'
import Twteer from "../twitter.png"
import Monstera from '../Monstera-1.png'
import Fern from '../Fern-1.png'
const Footer = () => {
  return (
    <Section className={'bg-primary relative'} id={'contactUs'}>
        <h2 className='text-white text-[32px] font-bold leading-[140%] text-center pt-19'>Feel free to contact us</h2>
        <div className='max-w-[315px] flex justify-between mx-auto pt-9'>
        <img src={Instragram} alt="instagram" />
        <img src={FaceBook} alt="fb" />
        <img src={Twteer} alt="twter" />
        </div>

        <div className='max-w-[650px]  mx-auto pt-9 pb-16'>
            <ul className='text-white text-[16px] font-bold font-Raleway flex justify-between items-center'>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Plants</a></li>
                <li><a href="">Delivery</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>

        <div className='absolute bottom-0 left-[25px]'>
        <img src={Monstera} alt="monstera" />
        </div>

        <div className='absolute bottom-0 right-[31px]'>
        <img src={Fern} alt="fern" />
        </div>


    </Section>
  )
}

export default Footer
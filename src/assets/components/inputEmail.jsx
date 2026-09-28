import Section from "./section"
import BannerThree from '../banner-3.png'
import Button from "./button"

const styles = {
    background: `url(${BannerThree}) no-repeat center/cover`,
}

const InputEmail = () => {
    return (
        <Section style={styles}>
            <div className="flex justify-between py-[128px]">
                <div className="max-w-[560px]">
                    <h2 className='text-white text-[32px] font-Lato font-bold'>Enter your email address for our mailing Promo or other interesting things</h2>
                </div>

    
                    <div className='border-2 border-white rounded-[5px] w-full max-w-[476px] mt-4 max-h-12'>
                        <input type="email" placeholder='Enter your email' className='placeholder:text-pasage placeholder:font-medium placeholder:text-[16px] py-3 pl-6 w-full h-full text-white' />
                    </div>
                    <div className="mt-4">
                        <Button className={"py-3 px-11 bg-primary rounded-[5px]"}><h5 className='text-[16px] text-white font-Raleway'>Submit</h5></Button>
                    </div>
            </div>
        </Section>
    )
}

export default InputEmail
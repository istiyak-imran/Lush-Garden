import Pineapple from '../pineapple.png'
import Kate from '../kate.png'

const AboutKate = () => {
  return (
     <div className='max-w-[360px] max-h-[329px] bg-pasage relative rounded-[10px]'>
            <div className='justify-end flex pt-25.25'>
            <img src={Pineapple} alt="apple"/>
            </div>
            <div className='absolute max-w-[243px] top-[40px] left-[44px]'>
                <div className='flex gap-5 items-center'>
                    <img src={Kate} alt="kate" />
                    <h4>Kate Szu</h4>
                </div>
    
                <div>
                <p className='pt-8 text-paragraph'>"Great service, beautiful flowers, timely delivery. Highly recommend."</p>
                </div>
    
            </div>
    
        </div>
  )
}

export default AboutKate
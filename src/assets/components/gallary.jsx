
import TextHeading from './textHeading'
import gallaryOne from '../gallary-1.png'
import gallaryTwo from '../gallary-2.png'
import gallaryThree from '../gallary-3.png'
import gallaryFour from '../gallary-4.png'
import gallaryFive from '../gallary-5.png'


const Gallary = () => {
  return (
    <div className='pb-40'>
      <div className='text-center pb-9'>
        <TextHeading heading={"Our Gallery View"}/>
     </div>
     <div className='flex justify-between'>
         <div>
          <img src={gallaryOne} alt="gallary-1" />
         </div>
         <div className='grid grid-cols-2 gap-2.75'>
                  <div><img src={gallaryTwo} alt="gallary-2" /></div>
                  <div><img src={gallaryThree} alt="gallary-3" /></div>
                  <div><img src={gallaryFour} alt="gallary-4" /></div>
                  <div><img src={gallaryFive} alt="gallary-5" /></div>

         </div>
    </div>
  </div>

  )
}

export default Gallary
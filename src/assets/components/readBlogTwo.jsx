import BlogTwo from '../blog-2.png'
import Calender from '../calender.png'
import Arrow from '../arrow.png'

const ReadBlogTwo = () => {
  return (
    <div className='max-w-[360px]'>
        <img src={BlogTwo} alt="one" />
        <h4 className='text-h4 pt-5.5'>The benefits of plants in your room</h4>
        <p className='text-paragraph pt-6'>Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....</p>
        <div className='flex justify-between items-center pt-4.75'>
            <div className='flex gap-1.25 items-center'>
                <img src={Calender} alt="date" />
                <p className='text-paragraph'>January 20, 2023</p>
            </div>
            <div className='flex gap-2 items-center'>
                <h6>Read More</h6>
                <img src={Arrow} alt="date" />

            </div>
        </div>
        </div>
  )
}

export default ReadBlogTwo
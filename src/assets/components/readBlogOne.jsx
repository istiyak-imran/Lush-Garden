import Blog from '../blog-1.png'
import Calender from '../calender.png'
import Arrow from '../arrow.png'

const ReadBlogOne = () => {
  return (
    <div className='max-w-[360px]'>
        <img src={Blog} alt="one" />
        <h4 className='text-h4 pt-3.5'>More productive with an atmosphere of greenery</h4>
        <p className='text-paragraph pt-1.25'>An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...</p>
        <div className='flex justify-between items-center pt-2.5'>
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

export default ReadBlogOne
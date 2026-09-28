import BlogThree from '../blog-3.png'
import Calender from '../calender.png'
import Arrow from '../arrow.png'

const ReadBlogThree = () => {
  return (
    <div className='max-w-[360px]'>
        <img src={BlogThree} alt="one" />
        <h4 className='text-h4 pt-5.5'>Hobbyist plants in the house</h4>
        <p className='text-paragraph pt-6'>Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....</p>
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

export default ReadBlogThree
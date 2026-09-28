import ReadBlogOne from './readBlogOne'
import ReadBlogThree from './readBlogThree'
import ReadBlogTwo from './readBlogTwo'
import Section from './section'
import TextHeading from './textHeading'

const Blog = () => {
  return (
    <Section className={'py-30'}>
      <div className='text-center pb-9'>
        <TextHeading heading={'Interesting blog to read'} />
      </div>
      <div className='flex justify-between'>
        <ReadBlogOne/>
        <ReadBlogTwo/>
        <ReadBlogThree/>
      </div>
    </Section>
  )
}

export default Blog
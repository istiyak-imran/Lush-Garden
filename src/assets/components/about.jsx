
import AboutDoris from './aboutDoris'
import AboutDyness from './aboutDyness'
import AboutKate from './aboutKate'
import TextHeading from './textHeading'
import Section from './section'

const About = () => {
  return (
    <Section className={'pb-30'} id={"abtUs"}>
        <div className='text-center pb-9'>
            <TextHeading heading={"What do they say about us"}/>
        </div>
        <div className='grid grid-cols-3'>
            <AboutDoris/>
            <AboutKate/>
            <AboutDyness/>
        </div>
    </Section>
  )
}

export default About
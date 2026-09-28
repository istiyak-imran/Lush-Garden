import React from 'react'
import Section from './section'
import Container from './container'
import TobOne from './tobOne'
import TobTwo from './tobTwo'
import TobThree from './tobThree'
import TobFour from './tobFour'
import TobFive from './tobFive'
import TobSix from './tobSix'
import TobSeven from './tobSeven'
import TobEight from './tobEight'
import TextHeading from './textHeading'

const Offer = () => {
  return (
    <Section id={"ourOffer"}>
            <div className='text-center pb-9'><TextHeading heading={"What we offer to you"}/></div>
            <div className='grid grid-cols-4 gap-4 pb-30'>
             <TobOne></TobOne>
             <TobTwo></TobTwo>
             <TobThree></TobThree>
             <TobFour></TobFour>
              <TobFive></TobFive>
             <TobSix></TobSix>
             <TobSeven></TobSeven>
             <TobEight></TobEight>
            </div>
    </Section>
  ) 
}

export default Offer
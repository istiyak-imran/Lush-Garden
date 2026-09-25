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

const Offer = () => {
  return (
    <Section>
        <Container>
            <div><h2 className='text-center pb-9'>What we offer to you</h2></div>
            <div className='flex justify-between pb-10'>
             <TobOne></TobOne>
             <TobTwo></TobTwo>
             <TobThree></TobThree>
             <TobFour></TobFour>
            </div>
            <div className='flex justify-between pb-30'>
              <TobFive></TobFive>
             <TobSix></TobSix>
             <TobSeven></TobSeven>
             <TobEight></TobEight>
            </div>
        </Container>
    </Section>
  ) 
}

export default Offer
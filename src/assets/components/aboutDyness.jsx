import React from 'react'
import ShadowBanboo from '../shadow-bamboo.png'
import Dyness from '../dyness.png'
const AboutDyness = () => {
  return (
     <div className='max-w-[360px] max-h-[329px] bg-pasage relative rounder-[10px]'>
        <div className='justify-end flex pt-25.25'>
        <img src={ShadowBanboo} alt="leaf"/>
        </div>
        <div className='absolute max-w-[243px] top-[40px] left-[44px]'>
            <div className='flex gap-5 items-center'>
                <img src={Dyness} alt="dyness" />
                <h4>Dyness </h4>
            </div>

            <div>
            <p className='pt-8 text-paragraph'>"I am very happy with my purchase from this website, the plants were healthy and arrived on time.”</p>
            </div>

        </div>

    </div>
  )
}

export default AboutDyness
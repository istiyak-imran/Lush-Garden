import React from 'react'
import Doris from '../doris.png'
import TwoLeaf from '../twoLeaf.png'
const AboutDoris = () => {
  return ( 
    <div className='max-w-[360px] max-h-[329px] bg-pasage relative rounded-[10px]'>
        <div className='justify-end flex pt-25.25'>
        <img src={TwoLeaf} alt="doris"/>
        </div>
        <div className='absolute max-w-[243px] top-[40px] left-[44px]'>
            <div className='flex gap-5 items-center'>
                <img src={Doris} alt="doris" />
                <h4>Doris Watson</h4>
            </div>

            <div>
            <p className='pt-8 text-paragraph'>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
            </div>

        </div>

    </div>
  )
}

export default AboutDoris
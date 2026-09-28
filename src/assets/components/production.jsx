
import bannerTwo from '../banner-2.png'
import TreeFive from './treeFive'
import TreeFour from './treeFour'
import TreeSix from './treeSix'
import TreeThree from './treeThree'
const Production = () => {
  return (
    <div>
        <div className='flex justify-between pb-30'>
            <div>
                <img src={bannerTwo} alt="" />
                </div>
            <div className='grid grid-cols-2'>
                <TreeThree/>
                <TreeFour/>
                <TreeFive/>
                <TreeSix/>
              </div>

        </div>
    </div>
  )
}

export default Production
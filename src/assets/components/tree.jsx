
import Section from './section'
import Container from './container'
import TreeBox from './treeBox'
import TreeOne from './treeOne'
import TreeTwo from './treeTwo'

const Tree = () => {
  return (
    <Section >
            <div className='flex justify-between pb-[120px]'>
                <TreeBox></TreeBox>
                <TreeOne></TreeOne>
                 <TreeTwo></TreeTwo>

            </div>


    </Section>
  )
}

export default Tree
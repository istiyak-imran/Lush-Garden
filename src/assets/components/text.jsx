
import Container from "./container"
import Section from "./section"
import TextHeading from "./textHeading"


const Text = () => {
  return (
    <Section>
        <Container >
            <div className="flex justify-between items-center py-[90px]">
                 <div className="max-w-[476px]">
                    <TextHeading heading={"We Help choose the most suitable plants for you"}/>
                 </div>
                <div className="max-w-[648px]">
                    <p>
                        Our selection includes a wide variety of flowers, from classic roses to exotic orchids, 
                        as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, 
                        whether you're looking to brighten up your home or send a thoughtful gift. 
                    </p>
                </div>
       
            </div>
            </Container>
    </Section>
  )
}

export default Text
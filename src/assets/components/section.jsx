import Container from "./container"


const Section = ({children,className,title, ...props}) => {
  return (
    <section className={className}  title={title} {...props}>
        <Container>
           {children}
       </Container>

    </section>
  )
}

export default Section
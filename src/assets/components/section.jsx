import Container from "./container"


const Section = ({children,className,title,id, ...props}) => {
  return (
    <section className={className}  title={title} {...props} id={id}>
        <Container>
           {children}
       </Container>

    </section>
  )
}

export default Section
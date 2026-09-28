import Container from "./container"


const Section = ({children,className,title,id, ...props}) => {
  return (
    <section  {...props} className={className}  title={title} id={id}>
        <Container>
           {children}
       </Container>

    </section>
  )
}

export default Section
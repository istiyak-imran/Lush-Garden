
 import Button from "./button"
 import Container from "./container"
const Nav = () => {
  return (

     <nav className='mx-auto absolute top-0 left-0 w-full pt-10' id="mainManu">
        <Container>
              <div className='flex justify-between items-center' >
                <a href="#"><img src="logo.svg" alt="Logo" /></a>
                <div className='flex justify-between items-center gap-[67px]'>
                    <div>
                        <ul className='flex gap-[51px] text-bacground font-Lato font-medium text-[18px] cursor-pointer '>
                            <li ><a href="#mainManu" className="myAfter">Home</a></li>
                            <li><a href="#abtUs" className="myAfter">About Us</a></li>
                            <li><a href="#ourOffer" className="myAfter">Planters</a></li>
                            <li><a href="#contactUs"className="myAfter">Contact</a></li>
                        </ul>
                    </div>
                    <Button className={`rounded-[3px] border-2 border-bacground`}><h5 className='py-[11px] px-[50px] font-Lato font-bold text-[16px] text-bacground'>Call Us</h5></Button>
                </div>
            </div>

        </Container>
    </nav>

  )
}

export default Nav


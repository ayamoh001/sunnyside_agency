import Link from 'next/link'
import { useState } from 'react'
import { MyHeader, MyImage, Flex, Container, FlowContent, Relative, Nav, Ul } from "../styles/layout.js"
import { Hn } from "../styles/typography.js" 
import { ContactBtn, Bars } from "../styles/custom.js"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  
  return (
    <header>
      <Relative>
          <MyImage display="block" lgdisplay="none" src="/images/mobile/image-header.jpg" alt="..." width={100} height={100} priority/>
          <MyImage display="none" lgdisplay="block" src="/images/desktop/image-header.jpg" alt="..." width={100} height={100} priority/>
          

          <FlowContent top="0">
            <Container height="100%">
              <Flex height="100%">
                  <MyHeader padding="0 1.5rem" height="5rem" lgheight="6rem">
                    <Flex  justify="space-between" align="center" direction="row" lgdirection="row"  width="100%">
                      <Container maxWidth="10rem" width="7rem" lgwidth="10rem" margin="0" lgmargin="0">
                        <MyImage src="/images/logo.svg" alt="logo" width={100} height={0}/>
                      </Container>
                      <Nav open={isOpen}>
                        <Ul>
                          <li>
                            <Link href="/">About</Link>
                          </li>
                          <li>
                            <Link href="/">Services</Link>
                          </li>
                          <li>
                            <Link href="/">Projects</Link>
                          </li>
                          <ContactBtn>CONTACT</ContactBtn>
                        </Ul>
                      </Nav>
                      <Bars onClick={toggle}>
                        <MyImage src="/images/icon-hamburger.svg" alt="..." width={100} height={100}/>
                      </Bars>
                    </Flex>
                  </MyHeader>
                  <Flex align="center" style={{flex:"1 1 auto"}}>
                      <Container margin="auto" padding="0 0 20vw 0" lgpadding="8vw 0 0 0">
                        <Flex align="center" justify="center" gap="1.75rem" lggap="5vw">
                          <Hn as="h1" size="2.5rem" lgsize="3.5rem" color="white" font="Fraunces" letterSpacing=".25rem">WE ARE CREATIVES</Hn>
                          <MyImage src="/images/icon-arrow-down.svg" alt="..." width={0} height={0}/>
                        </Flex>
                      </Container>
                  </Flex>
              </Flex>
            </Container>
          </FlowContent>
      </Relative>
    </header>
  )
}

export default Header
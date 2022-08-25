import Link from 'next/link'
import { MyImage, Flex, Container, Bg } from "../styles/layout.styled"
import { Icon } from "../styles/typography.styled"
import { FaTwitter, FaInstagram, FaPinterest, FaFacebookSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <Bg bg="var(--clr-dark-moderate-cyan)">
        <Container padding="4rem 1rem">
          <Flex gap="2rem" lggap="3rem" color="var(--clr-dark-desaturated-cyan)">

            <Container maxWidth="11rem" width="100%">
              <MyImage src="/images/logo.svg" alt="logo"  mywidth="100%" myheight="auto" width={180} height={35}/>
            </Container>
            <Container maxWidth="17rem" width="100%">
              <Flex direction="row" justify="space-between">
                  <Link href="/" ><Icon as="a" color="inherit" hcolor="var(--clr-white)">About</Icon></Link>
                  <Link href="/" ><Icon as="a" color="inherit" hcolor="var(--clr-white)">Services</Icon></Link>
                  <Link href="/" ><Icon as="a" color="inherit" hcolor="var(--clr-white)">Projects</Icon></Link>
              </Flex>
            </Container>

            <Container maxWidth="10rem" width="100%" padding="3rem 0 0 0">
              <Flex direction="row" justify="space-between">
                  <Link href="/" ><Icon as="a"color="inherit" hcolor="var(--clr-white)"><FaFacebookSquare style={{fontSize:"1.25rem"}}/></Icon></Link>
                  <Link href="/" ><Icon as="a"color="inherit" hcolor="var(--clr-white)"><FaInstagram style={{fontSize:"1.25rem"}}/></Icon></Link>
                  <Link href="/" ><Icon as="a"color="inherit" hcolor="var(--clr-white)"><FaTwitter style={{fontSize:"1.25rem"}}/></Icon></Link>
                  <Link href="/" ><Icon as="a"color="inherit" hcolor="var(--clr-white)"><FaPinterest style={{fontSize:"1.25rem"}}/></Icon></Link>
              </Flex>
            </Container>

          </Flex>
        </Container>

        <Container  padding="0 2rem 2rem 2rem">
          <p style={{color:'white',textAlign:"center"}}>Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>. Coded by <Link href="/">Mohamed Ayaou</Link>.</p>
        </Container>
      </Bg>
    </footer>
  )
}

export default Footer
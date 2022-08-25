import { MyImage, Flex, Container, Bg } from "../styles/layout.styled"
import { Hn, Text} from "../styles/typography.styled"


const ClientCard = ({img, text, name, position}) =>{
  return (
    <Flex gap="1.5rem" lggap="3rem">
      <Container width="5rem" height="5rem" lgwidth="4rem" lgheight="4rem">
        <MyImage src={img} alt="..." borderradius="50%" width={100} height={100}/>
      </Container>
      <Text color="var(--clr-dark-grayish-blue)" lineheight="1.5">{text}</Text>
      <Flex gap=".5rem" >
        <Hn as="h4" size="1rem" color="var(--clr-very-dark-desaturated-blue)" font="fraunces" weight="900">{name}</Hn>
        <Hn as="h4" size=".75rem" color="var(--clr-grayish-blue)">{position}</Hn>
      </Flex>
    </Flex>
  )
}

const Testimotionals = () => {
  return (
    <section>
      <Bg>
        <Container padding="4rem 1rem" lgpadding="clamp(2rem, 12vw, 8rem) clamp(2rem, 10vw, 8rem)">
          <Hn as="h3" size="1rem" padding="0 0 4rem 0"  textTransform="uppercase" letterSpacing=".25rem" font="Fraunces" color="var(--clr-grayish-blue)">Client testimonials</Hn>
          <Flex gap="3rem" lgdirection="row">

            <ClientCard 
            img={"/images/image-thomas.jpg"} 
            text={"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."} 
            name={"Emily R."} 
            position={"Marketing Director"} />

            <ClientCard 
            img={"/images/image-thomas.jpg"} 
            text={"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."} 
            name={"Thomas S."} position={"Marketing Director"} />

            <ClientCard 
            img={"/images/image-thomas.jpg"} 
            text={"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"} 
            name={"Jennie F."} position={"Business Owner"} />
            
          </Flex>
        </Container>
      </Bg>
    </section>
  )
}

export default Testimotionals
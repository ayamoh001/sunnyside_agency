import { MyImage, Flex, Container, Bg } from "../styles/layout.styled.js"
import { Hn, Text } from "../styles/typography.styled.js"
import { StyledBtn } from "../styles/custom.styled.js"


const CardWithSideImg = ({title, text, btnText, img, lgImg, btnBg, reverse, lgreverse}) =>{
  return (
    <Flex direction="column" lgdirection="row" reverse={reverse} lgreverse={lgreverse}>
      <Bg style={{flexBasis:"50%"}}>
        <Container padding="3rem 2rem" lgpadding="clamp(2rem,12vw,10rem) clamp(2rem,9.5vw,8rem)" height="100%">
          <Flex lgDirection="column" align="center" lgalign="start" justify="center" lgjustify="space-between" height="100%">
            <Hn as="h2" size="2rem" lgsize="2.25rem" font="fraunces" weight="900" align="center" lgalign="start" color="var(--clr-dark-blue)">{title}</Hn>
            <Text padding="1rem 0" align="center" lgalign="start" color="var(--clr-grayish-blue)" lineheight="normal" lglineheight="1.5">{text}</Text>
            <StyledBtn color="var(--clr-dark-blue)" font="fraunces" bg={btnBg} weight="900">{btnText}</StyledBtn>
          </Flex>
        </Container>
      </Bg>
      <MyImage display="block" lgdisplay="none" style={{flexBasis:"50%"}} src={img} alt="..."  mywidth="100%" myheight="auto" width={1440/2} height={600}/>
      <MyImage display="none" lgdisplay="block" style={{flexBasis:"50%"}} src={lgImg} alt="..."  mywidth="100%" myheight="auto" width={1440/2} height={600}/>
    </Flex>
  )
}

const ReversedCols = () => {
  return (
    <section>
      <CardWithSideImg 
      reverse={true}
      title={"Transform your brand"} 
      text={"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."} 
      btnText={"LEARN MORE"} 
      img={"/images/mobile/image-transform.jpg"}
      lgImg={"/images/desktop/image-transform.jpg"}
      btnBg={"var(--clr-yellow)"} />

      <CardWithSideImg 
      reverse={true}
      lgreverse={true}
      title={"Stand out to the right audience"} 
      text={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."} 
      btnText={"LEARN MORE"} 
      img={"/images/mobile/image-stand-out.jpg"}
      lgImg={"/images/desktop/image-stand-out.jpg"}
      btnBg={"var(--clr-soft-red)"} />
      
    </section>
  )
}

export default ReversedCols
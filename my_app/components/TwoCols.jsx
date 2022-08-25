import { MyImage, Flex, Container, FlowContent, Relative } from "../styles/layout.styled.js"
import { Hn, Text } from "../styles/typography.styled.js"

const Col = ({img, lgImg, title, text}) => {
  return (
    <Container width="100%" lgwidth="50%">
      <Relative>
          <MyImage display="block" lgdisplay="none" src={img} alt="..." mywidth="100%" myheight="auto" width={1440/2} height={600}/>
          <MyImage display="none" lgdisplay="block" src={lgImg} alt="..." mywidth="100%" myheight="auto" width={1440/2} height={600}/>
          <FlowContent height="auto" bottom="0" >
              <Container padding="3rem 1.5rem" lgpadding="clamp(1rem,4vw,4rem) clamp(7rem,10vw,10rem)">
                <Hn as="h3" size="1.5rem"
                color="var(--clr-dark-desaturated-cyan)" 
                font="fraunces" 
                padding="0 0 1rem"  
                weight="900">{title}</Hn>
                <Text color="var(--clr-dark-desaturated-cyan)" 
                lineheight="1.5"
                lglineheight="1.75"
                size="15px"
                letterSpacing=".5px">{text}</Text>
              </Container>
          </FlowContent>
        </Relative>
      </Container>
  )
}

const TwoCols = () => {
  return (
    <Flex lgdirection="row" >
      
      <Col 
      img={"/images/mobile/image-graphic-design.jpg"} 
      lgImg={"/images/desktop/image-graphic-design.jpg"} 
      title={"Graphic design"} 
      text={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."} />

      <Col 
      img={"/images/mobile/image-photography.jpg"} 
      lgImg={"/images/desktop/image-photography.jpg"} 
      title={"Photography"} 
      text={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."} />
      
    </Flex>
  )
}

export default TwoCols
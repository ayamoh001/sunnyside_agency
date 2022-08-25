import { MyImage, Grid } from "../styles/layout.styled"

const FourCols = () => {
  return (
    <section>
      <Grid count={2} lgCount={4}>
        <MyImage src="/images/mobile/image-gallery-milkbottles.jpg" alt="..."  mywidth="100%" myheight="100%" width={1440/4} height={360}/>
        <MyImage src="/images/mobile/image-gallery-orange.jpg" alt="..."  mywidth="100%" myheight="100%" width={1440/4} height={360}/>
        <MyImage src="/images/mobile/image-gallery-cone.jpg" alt="..."  mywidth="100%" myheight="100%" width={1440/4} height={360}/>
        <MyImage src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="..."  mywidth="100%" myheight="100%" width={1440/4} height={360}/>
      </Grid>
    </section>
  )
}

export default FourCols
import { MyImage, Grid } from "../styles/layout"

const FourCols = () => {
  return (
    <section>
      <Grid count={2} lgCount={4}>
        <MyImage src="/images/mobile/image-gallery-milkbottles.jpg" alt="..." width={100} height={100} quality={100}/>
        <MyImage src="/images/mobile/image-gallery-orange.jpg" alt="..." width={100} height={100} quality={100}/>
        <MyImage src="/images/mobile/image-gallery-cone.jpg" alt="..." width={100} height={100} quality={100}/>
        <MyImage src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="..." width={100} height={100} quality={100}/>
      </Grid>
    </section>
  )
}

export default FourCols
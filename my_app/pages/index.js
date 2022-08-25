import Head from 'next/head'

import { GlobalStyle } from '../styles/globals.styled'
import { Container } from "../styles/layout.styled"

import Header from "../components/Header.jsx"
import ReversedCols from "../components/ReversedCols.jsx"
import TwoCols from "../components/TwoCols.jsx"
import Testimotionals from "../components/Testimotionals.jsx"
import FourCols from "../components/FourCols.jsx"
import Footer from "../components/Footer.jsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <meta name="description" content="Next js with styled components" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      
      <GlobalStyle />
      <Container as="main" > 
        <Header />
        <ReversedCols />
        <TwoCols />
        <Testimotionals />
        <FourCols />
        <Footer />
      </Container>
    </>
  )
}

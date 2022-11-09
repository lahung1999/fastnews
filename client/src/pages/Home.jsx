import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import BodyTop from '../components/BodyTop'
import Slideshow from '../components/SlideShow'
import SponsoredNews from '../components/SponsoredNews'

const Home = () => {
  return (
    <Container>
        <Banner />
        <Slideshow />
        <BodyTop />
        <SponsoredNews />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default Home
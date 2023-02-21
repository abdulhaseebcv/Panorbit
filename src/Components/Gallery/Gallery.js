import React from 'react'
import Header from '../Header/Header'
import { DetailsContainer, HeaderContainer, MainContainer, SideNavContainer } from '../Profile.js/ProfileStyle'
import SideNav from '../SideNav/SideNav'

function Gallery() {
  return (
    <MainContainer>
      <SideNavContainer>
        <SideNav />
      </SideNavContainer>
      <DetailsContainer>
        <HeaderContainer>
          <Header title='Gallery' />
        </HeaderContainer>
        <h2>Coming Soon</h2>
      </DetailsContainer>
    </MainContainer>
  )
}

export default Gallery
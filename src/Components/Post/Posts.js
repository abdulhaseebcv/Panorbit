import React from 'react'
import Header from '../Header/Header'
import { DetailsContainer, HeaderContainer, MainContainer, SideNavContainer } from '../Profile.js/ProfileStyle'
import SideNav from '../SideNav/SideNav'

function Posts() {
  return (
    <MainContainer>
      <SideNavContainer>
        <SideNav />
      </SideNavContainer>
      <DetailsContainer>
        <HeaderContainer>
          <Header title='Posts' />
        </HeaderContainer>
        <h1>Coming Soon</h1>
      </DetailsContainer>
    </MainContainer>
  )
}

export default Posts
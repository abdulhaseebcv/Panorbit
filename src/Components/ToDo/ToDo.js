import React from 'react'
import Header from '../Header/Header'
import { DetailsContainer, HeaderContainer, MainContainer, SideNavContainer } from '../Profile/ProfileStyle'
import SideNav from '../SideNav/SideNav'

function ToDo() {
  return (
    <MainContainer>
      <SideNavContainer>
        <SideNav />
      </SideNavContainer>
      <DetailsContainer>
        <HeaderContainer>
          <Header title='ToDo' />
        </HeaderContainer>
        <h2>Coming Soon</h2>
      </DetailsContainer>
    </MainContainer>
  )
}

export default ToDo
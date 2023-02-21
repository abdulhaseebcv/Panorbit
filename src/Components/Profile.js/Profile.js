import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/Context'
import Header from '../Header/Header'
import SideNav from '../SideNav/SideNav'
import { AddressDetails, BreakLineDiv, Details, DetailsContainer, HeaderContainer, Image, LeftSection, MainContainer, Map, RightSection, Section, SideNavContainer, SignOutContainer, Username } from './ProfileStyle'

function Profile() {
    const [currentUser, setCurrentUser] = useState({})
    const { user } = useContext(UserContext)

    useEffect(() => {
        setCurrentUser(user)
    }, [])
    return (
        <MainContainer>
            <SideNavContainer>
                <SideNav />
            </SideNavContainer>
            <DetailsContainer>
                <HeaderContainer>
                    <Header title='Profile' />
                </HeaderContainer>
                <Section>
                    <LeftSection>
                        <Image>
                            <img src={currentUser?.profilepicture} alt="" />
                        </Image>
                        <Details>
                            <span>Username: </span>
                            <p>{currentUser?.username}</p>
                        </Details>
                        <Details>
                            <span>email: </span>
                            <p>{currentUser?.email}</p>
                        </Details>
                        <Details>
                            <span>phone: </span>
                            <p>{currentUser?.phone}</p>
                        </Details>
                        <Details>
                            <span>Webiste: </span>
                            <p>{currentUser?.website}</p>
                        </Details>
                        <hr style={{ marginLeft: '25px' }} />
                        <div style={{ textAlign: 'center', color: 'grey', fontSize: '14px', marginTop: '5px' }}>
                            <span>Company</span>
                        </div>

                        <Details>
                            <span>Name: </span>
                            <p>{currentUser?.company?.name}</p>
                        </Details>
                        <Details>
                            <span>catchphrase: </span>
                            <p>{currentUser?.company?.catchPhrase}</p>
                        </Details>
                        <Details>
                            <span>bs: </span>
                            <p>{currentUser?.company?.bs}</p>
                        </Details>
                    </LeftSection>
                    <BreakLineDiv></BreakLineDiv>
                    <RightSection>
                        <span style={{ marginLeft: '5px', color: 'grey' }}>Address:</span>
                        <AddressDetails>
                            <span>Street: </span>
                            <p>{currentUser?.address?.street}</p>
                        </AddressDetails>
                        <AddressDetails>
                            <span>Suit: </span>
                            <p>{currentUser?.address?.suite}</p>
                        </AddressDetails>
                        <AddressDetails>
                            <span>City: </span>
                            <p>{currentUser?.address?.city}</p>
                        </AddressDetails>
                        <AddressDetails>
                            <span>Zipcode: </span>
                            <p>{currentUser?.address?.zipcode}</p>
                        </AddressDetails>
                        <Map>
                            <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="" />
                        </Map>
                    </RightSection>
                </Section>
            </DetailsContainer>
        </MainContainer>
    )
}

export default Profile
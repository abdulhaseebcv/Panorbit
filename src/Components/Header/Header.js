import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/Context'
import { Image, Name, UserContainer } from '../Login/LoginStyle'
import { HeaderContainer, MainContainer, SignOutContainer, Title } from './HeaderStyle'
import { useNavigate } from 'react-router-dom'
import SignOut from '../SignOut/SignOut'
import { ExitIcon } from '../SignOut/SignOutStyle'

function Header({ title }) {
    const [account, setAccount] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        setCurrentUser(user)
    }, [])
    return (
        <MainContainer>
            <HeaderContainer>
                <Title>{title}</Title>
                <UserContainer>
                    <Image onClick={() => setAccount(!account)} src={currentUser?.profilepicture}></Image>
                    <Name>{currentUser?.name}</Name>
                </UserContainer>
            </HeaderContainer>
            <hr />
            {account && <SignOutContainer>
                <SignOut />
                <ExitIcon>
                    <i onClick={() => setAccount(false)} className="fa-solid fa-xmark"></i>
                </ExitIcon>
            </SignOutContainer>}

        </MainContainer>
    )
}

export default Header
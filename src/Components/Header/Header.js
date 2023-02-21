import React, { useContext, useEffect, useState } from 'react'
import { ToggleContext, UserContext } from '../../Context/Context'
import { Image, Name, UserContainer } from '../Login/LoginStyle'
import { HeaderContainer, MainContainer, SignOutContainer, ToggleButton } from './HeaderStyle'
import SignOut from '../SignOut/SignOut'
import { ExitIcon } from '../SignOut/SignOutStyle'

function Header({ title }) {
    const [account, setAccount] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const { user } = useContext(UserContext)
    const { toggle, setToggle } = useContext(ToggleContext)
    useEffect(() => {
        setCurrentUser(user)
    }, [])
    return (
        <MainContainer>
            <HeaderContainer>
                <ToggleButton>
                    <i onClick={() => setToggle(!toggle)} className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </ToggleButton>
                <h1>{title}</h1>
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
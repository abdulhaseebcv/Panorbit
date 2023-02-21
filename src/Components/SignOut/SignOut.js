import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'
import { Button, Container, Details, ExitIcon, Name } from './SignOutStyle'

function SignOut() {
    const [currentUser, setCurrentUser] = useState({})
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const handleSignout = () => {
        navigate('/')
    }
    useEffect(() => {
        setCurrentUser(user)
    }, [])
    return (
        <Container>
            <Details>
                <img src={currentUser?.profilepicture} alt="" />
                <p>{currentUser?.name}</p>
                <span>{currentUser?.email}</span>
            </Details>
            <Button onClick={handleSignout}>Sign out</Button>
        </Container>
    )
}

export default SignOut
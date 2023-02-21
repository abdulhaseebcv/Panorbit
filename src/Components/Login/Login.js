import React, { useContext, useEffect, useState } from 'react'
import { BreakLine, Card, Image, LoginContainer, MainContainer, Name, Title, UserContainer } from './LoginStyle'
import axios from 'axios'
import { UserContext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [users, setUsers] = useState([])
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const sendReq = () => {
        axios.get('https://panorbit.in/api/users.json').then((res) => {
            console.log('res: ', res.data.users)
            setUsers(res?.data?.users)
        })
    }

    const handleLogin = (userDetails) => {
        console.log('user', userDetails);
        setUser(userDetails)
        navigate('/profile')
    }

    useEffect(() => {
        sendReq()
    }, [])
    return (
        <MainContainer>
            <LoginContainer>
                <Card>
                    <Title>
                        <h1>Select an account</h1>
                    </Title>
                    {users.map((user) => {
                        return (
                            <div key={user.id}>
                                <UserContainer>
                                    <Image src={user?.profilepicture} onClick={() => handleLogin(user)}></Image>
                                    <Name onClick={() => handleLogin(user)}>{user?.name}</Name>
                                </UserContainer>
                                <BreakLine />
                            </div>
                        )
                    })}
                </Card>
            </LoginContainer>
        </MainContainer>
    )
}

export default Login
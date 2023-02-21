import styled from 'styled-components'

export const MainContainer = styled.div`
height: 100vh;
background-color: #495057;
`

export const LoginContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`
export const Card = styled.div`
border-radius: 18px;
margin-top: 60px;
width: 40%;
height: 450px;
background: #ffffff;
overflow-x: scroll;
`
export const Title = styled.div`
padding: 15px;
border-top-left-radius: 18px;
border-top-right-radius: 18px;
background: #e9ecef;
text-align: center;
h1{
    font-size: 1rem;
    font-weight: bold;
}
`

export const UserContainer = styled.div`
padding: 8px;
margin-left: 20px;
display: flex;
hr{
    margin-top: 7px;
}
`
export const Image = styled.img`
height:2rem;
width: 2rem;
border-radius: 50%;
cursor: pointer;
`

export const Name = styled.p`
font-size:12px ;
margin-left: 13px;
cursor: pointer;
margin-top: 7px;
`

export const BreakLine = styled.hr`
margin: auto;
width:455px;
color: #e9ecef;
`
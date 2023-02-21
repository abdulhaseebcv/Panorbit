import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 250px;
height: 250px;
background: #f8f9fa;
border-radius: 10px;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

export const Details = styled.div`
text-align: center;
img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
p{
    font-weight: 600;
    font-size: 13px;
    margin-top: 5px;
}
span{
    font-size: 15px;
    color: grey;
}
`

export const Button = styled.button`
padding: 5px;
border-radius: 8px;
font-weight: bold;
background: red;
border-color: transparent;
margin-top: 10px;
cursor: pointer;
`
export const ExitIcon = styled.div`
cursor: pointer;
position: absolute;
color: black;
top: 6px;
right: 13px;
font-size: 25px;
`
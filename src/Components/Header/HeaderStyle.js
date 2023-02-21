import styled from 'styled-components'

export const MainContainer = styled.div`
padding: 20px;
hr{
    color: #e9ecef;
}
`

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
h1{
    color: grey;
    font-size: 1.8rem;
    margin-top: 10px;
    margin-left: 30px;
}
`

export const SignOutContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 32px;
    `

export const ToggleButton =styled.div`
display: none;
@media (max-width:750px) {
    display: block;
    font-size: 27px;
    margin-top: 4px;
    padding: 11px;
    cursor: pointer;
}
`
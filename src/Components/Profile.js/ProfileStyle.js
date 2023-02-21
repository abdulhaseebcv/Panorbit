import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
`

export const SideNavContainer = styled.div`
margin-top:30px ;
margin-left: 30px;
height:500px;
flex: 1;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(105,105,129,1) 57%, rgba(0,212,255,1) 100%);
border: 1px solid linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(105,105,129,1) 57%, rgba(0,212,255,1) 100%);
border-radius: 15px;
color: #ffff;
font-weight: 600;
@media (max-width:950px) {
    flex: 2;
}
@media (max-width:750px) {
    display: none;
}
`

export const DetailsContainer = styled.div`
flex: 7;
hr{
    color: #e9ecef;
    margin-top: 10px;
}

@media (max-width:950px) {
    flex: 9;
}
@media (max-width:750px) {
    padding: 5px;
}
h2{
    text-align: center;
    color: grey;
    font-size: 2.5rem;
}
`

export const HeaderContainer = styled.div`
`

export const Image = styled.div`
display: flex;
justify-content: center;
img{
    height: 110px;
    width: 110px;
    border-radius: 50%;
}
`
export const Details = styled.div`
display: flex;
justify-content: center;
margin-top: 7px;
span{
    color:grey;
   
    font-size: 14px;
}
p{
    margin-left: 5px;
    font-weight: 600;
    font-size: 13px;
}
@media (max-width:750px) {
    margin-top: 3px;
}
`
export const Section = styled.div`
display: flex;
@media (max-width:750px) {
    flex-direction: column;
}
`

export const LeftSection = styled.div`
padding: 5px;
flex: 2;
`

export const RightSection = styled.div`
margin-left: 20px;
padding: 5px;
flex: 3;
@media (max-width:750px) {
margin-left: 0;
display: flex;
flex-direction: column;
align-items: center;
}
`

export const BreakLineDiv = styled.div`
 color: #e9ecef;
margin-left: 40px;
height: 400px;
border: 1px solid grey;
@media (max-width:750px) {
    display: none;
}
`

export const AddressDetails = styled.div`
margin-left: 35px;
display: flex;
margin-top: 7px;
span{
    color:grey;
    font-size: 14px;
}
p{
    margin-left: 5px;
    font-weight: 600;
    font-size: 14px;
}

`

export const Map = styled.div`
border: 1px solid transparent;
display: flex;
justify-content: center;
margin-top: 25px;
max-width: 400px;
img{
   height: 180px;
   border: 1px solid transparent;
   border-radius: 15px;
}
`
import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
`

export const SideNavContainer = styled.div`
margin-top:30px ;
margin-left: 30px;
padding: 50px;
height:520px;
width: 12%;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(105,105,129,1) 57%, rgba(0,212,255,1) 100%);
border: 1px solid linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(105,105,129,1) 57%, rgba(0,212,255,1) 100%);
border-radius: 15px;
color: #ffff;
font-weight: 600;

ul{
    margin-top: 60px;
}

li{
    list-style: none;
    margin-top:20px;
    cursor: pointer;
}
hr{
    color: #e9ecef;
    margin-top: 8px;
}
`

export const DetailsContainer = styled.div`
width: 100%;
hr{
    color: #e9ecef;
    margin-top: 10px;
}
h1{
    text-align: center;
    font-weight: bolder;
    color: grey;
    font-size: 2rem;

}
`

export const HeaderContainer = styled.div`

`

export const Image = styled.div`
display: flex;
justify-content: center;
img{
    height: 150px;
    width: 150px;
    border-radius: 50%;
}
`
export const Details = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 10px;
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
export const Section = styled.div`
display: flex;
`

export const LeftSection = styled.div`
padding: 20px;
width: 30%;
`

export const RightSection = styled.div`
padding: 30px;
width:58% ;
`

export const BreakLineDiv = styled.div`
 color: #e9ecef;
margin-left: 40px;
height: 400px;
border: 1px solid grey;
`

export const AddressDetails = styled.div`
margin-left: 35px;
display: flex;
justify-content: start;
margin-top: 10px;
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
img{
    width: 450px;
   height: 200px;
   border: 1px solid transparent;
   border-radius: 10px;
}
`
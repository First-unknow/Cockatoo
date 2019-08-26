import styled from 'styled-components'

export const Header = styled.h1`
    color : #FB9FA4;
`

export const Subtitle = styled.span`
    color : #FB9FA4 !important;
    font-size : 1rem;
`

export const Link = styled.a`
    color : #FB9FA4 !important;
    font-size : 2rem;

    &:hover{
        text-decoration:none;
        color:inherit;
    }

    @media (min-width:768px){
        font-size:1.25rem;
    }
    @media (min-width:1024px){
        font-size:1.5rem;
    }
`

export default Text
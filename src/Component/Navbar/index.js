import React, { Component } from 'react'
import styled from 'styled-components'

import { Subtitle, Link } from '../Core/Text'

const Collage = styled(Link)`
    
    font-size:2rem;
    color : #FB9FA4;
    transform:rotate(270deg);
    
    &:hover{
        color : #FB9FA4;
        text-decoration:none;

        animation:slideInDown 2s; 
        @keyframes slideInDown {
            from {
              transform: translate(0, -100%);
              visibility: visible;
            }
        
            to {
              transform: translate(0, 0);
            }
        }
    }
`

export default class NavBar extends Component {
    render() {
        return (
            <div className="fixed-top" >
                <div className="d-flex justify-content-start">

                </div>
                <div className="d-flex justify-content-center m-4">
                    <Subtitle>Online boutique</Subtitle>
                </div>
                <div className="d-flex justify-content-end">
                    <Collage href="https://collagecrafting.com/en">Collage</Collage>
                </div>
            </div>
        )
    }
}

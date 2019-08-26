import React, { Component } from 'react'
import styled from 'styled-components'

import { Header, Subtitle, Link } from '../Core/Text'

const Head = styled(Header)`
    margin-top: 20vh;
    font-size : 15em;
    line-height : .8;
    @media(max-width:1024px) {
       font-size:3em;  
    }
`

const LinkShop = styled(Link)`
    text-decoration:underline;
    &:hover{
        text-decoration:underline;
    }
`

export default class Body extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex align-items-end ">
                    <div className="col-1"></div>
                    <div className="col-8 col-xd-9">
                        <Head> 
                            <span>PRODUCT</span> <br /> 
                            <span>DESIGN</span> 
                        </Head>
                    </div>
                    <div className="col-2 col-xd-1">
                        <LinkShop href="https://collagecrafting.com/en/products/all"> Shop </LinkShop>
                    </div>
                </div>
                <div className="pl-0 pr-0 p-lg-5 m-lg-5">
                    <img src="/images/home2.jpg" width="100%" height="100%"/>
                </div>
            </React.Fragment>
        )
    }
}

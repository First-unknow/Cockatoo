import React, { Component } from 'react'
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Background from './Background'

import NavBar from '../Navbar/index'
import Body from '../Body/index'

export default class componentName extends Component {
  render() {
    return (
        <Background className="container-fluid p-0">
            <NavBar />
            <Body />
        </Background>
    )
  }
}

import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import HeaderCustom from './headerCustom'
import 'semantic-ui-css/semantic.min.css'

export default class Layout extends Component {
    render() {
        return (
            <Container>
                <HeaderCustom/>
                {this.props.children}
            </Container>
        )
    }
}

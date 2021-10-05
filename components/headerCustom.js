import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import {Link} from '../routes';

export default class HeaderCustom  extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Menu style={{marginTop: '2rem'}}>
                <Link route='/'>
                    <a className="item">
                    Kick-Start Campaign
                    </a>
                </Link>
                <Menu.Menu position='right'>
                <Link route='/'>
                    <a className="item">
                    Campaigns
                    </a>
                </Link>
                <Link route='/campaigns/new'>
                    <a className="item">
                    +
                    </a>
                </Link>
                </Menu.Menu>
            </Menu>
        )
    }
}

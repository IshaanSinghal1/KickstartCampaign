import React, { Component } from 'react'
import generator from '../ethereum/generator'
import { Card,Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes'

export default class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns=await generator.methods.getCampaignList().call();
        return {campaigns};
    }

    renderCampaigns=()=>{
        const items=this.props.campaigns.map((address)=>{
            return{
                header:address,
                description:(<Link route={`/campaigns/${address}`}>
                    <a>View Campaign</a>
                </Link>),
                fluid:true
            };
        })
        return <Card.Group items={items}></Card.Group>
    }
    render() {
        return (
            <Layout>
            <div>
                <h2>Open Campaigns</h2>
                <Link route="/campaigns/new">
                <a>
                <Button floated='right' content='Create Campaign' icon='add' primary />
                </a>
                </Link>
                {this.renderCampaigns()}
            </div>
            </Layout>
        )
    }
}
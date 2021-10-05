import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react';
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';
import {Link} from '../../routes'
export default class Show extends Component {
    static async getInitialProps(props){
        const currCampaign=Campaign(props.query.address);
        const summary= await currCampaign.methods.getSummary().call();
        return{
            address:props.query.address,
            minimumContribution:summary[0],
            balance:summary[1],
            requestCount:summary[2],
            approversCount:summary[3],
            manager:summary[4]
        };
    }
    renderCards=()=>{
        const{
            balance,
            manager,
            minimumContribution,
            requestCount,
            approversCount
        }=this.props;
        const items=[
            {
                header:manager,
                meta:'Manager Address',
                description:'The Creator of the current campaign',
                style:{overflowWrap:'break-word'}
            },
            {
                header:minimumContribution,
                meta:'Minimum Contribution(wei)',
                description:'The minimum amount of contribution required to become a contributor and approving member of the campaign',
               
            },{
                header:requestCount,
                meta:'Requests',
                description:'Number of requests made by manager of the campaign for withdrawal of funds to various entities.',
                
            },{
                header:approversCount,
                meta:'Conributors',
                description:'The number of people shown support to the campaign with their valuable contribution',
                
            },
            {
                header:web3.utils.fromWei(balance,'ether'),
                meta:'Total Fund Available(Ehter)',
                description:'The amount of funds that our campaign currently holds.',
                
            }
        ]
        return <Card.Group items={items} className='purple' itemsPerRow='2' centered /> 
    }
    render() {
        return (
            <Layout>
            <h1>Campaign Details</h1>
            {this.renderCards()}
            <div className="buttonCenter" style={{display:'flex',justifyContent:'center',margin:'1rem'}}>
            <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                    <Button color='purple'>View Requests</Button>
                </a>
            </Link>
            </div>
            <ContributeForm address={this.props.address}></ContributeForm> 
            </Layout>
        )
    }
}

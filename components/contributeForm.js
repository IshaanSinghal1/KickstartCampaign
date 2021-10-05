import React, { Component } from 'react'
import { Button, Form,Input,Message } from 'semantic-ui-react'
import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3';
import {Router} from '../routes'

export default class ContributeForm extends Component {
    constructor(props){
        super(props);
        this.state={
            ether:'',
            loading:false,
            errorMessage:''
        }
    }
    handleChange=(e)=>{
        var val=e.target.value;
        console.log(val)
        this.setState({
            ether:val
        })
    }
    onSubmit=async (e)=>{
        e.preventDefault();
        console.log(this.props.address)
        const campaign=Campaign(this.props.address)
        this.setState({
            loading:true,
            errorMessage:''
        })
        try {
            const accounts=await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value: web3.utils.toWei(this.state.ether,'ether') 
            })
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        } catch (error) {
            this.setState({
                errorMessage:error.message
            })
        }
        this.setState({
            loading:false
        })
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit} style={{marginTop:'5rem'}} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label><h3>Amount To Contribute</h3></label>
                    <Input onChange={this.handleChange} label='ether' labelPosition='right'/>
                </Form.Field>
                <Message error header="Oops! There is some error" content={this.state.errorMessage}></Message>
                <Button primary loading={this.state.loading}>Contribute</Button>
            </Form>
        )
    }
}

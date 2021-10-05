import router from "next/router";
import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import generator from "../../ethereum/generator";
import web3 from "../../ethereum/web3";
import {Router} from '../../routes'

export default class NewCampaign extends Component {
  constructor() {
    super();
    this.state = {
      minimumContribution: "",
      errorMessage: "",
      isSpin: false,
    };
  }
  handleChange = (e) => {
    var val = e.target.value;
    this.setState({
      minimumContribution: val,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSpin: true,
      errorMessage: "",
    });
    try {
      const accounts = await web3.eth.getAccounts();
      await generator.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });
        Router.pushRoute('/')
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
    }
    this.setState({
      isSpin: false,
    });
  };
  render() {
    return (
      <Layout>
        <h1>Create a New Campaign</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Amount Limit for Contribution</label>
            <Input
              label="WEI"
              labelPosition="right"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Message
            error
            header="Oops! There is some error"
            content={this.state.errorMessage}
          />
          <Button loading={this.state.isSpin} primary>
            Create Your Campaign
          </Button>
        </Form>
      </Layout>
    );
  }
}

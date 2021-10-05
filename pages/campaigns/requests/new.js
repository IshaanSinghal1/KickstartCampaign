import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";

export default class RequestNew extends Component {
  state = {
    description: "",
    ether: "",
    recipient: "",
    errorMessage: "",
    isSpin: false
  };
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }
  handleDescription = (e) => {
    var val = e.target.value;
    this.setState({
      description: val,
    });
  };
  handleValue = (e) => {
    var val = e.target.value;
    this.setState({
      ether: val,
    });
  };
  handleRecipient = (e) => {
    var val = e.target.value;
    this.setState({
      recipient: val,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const campaigns = Campaign(this.props.address);
    const { description, ether, recipient } = this.state;
    this.setState({
        isSpin: true,
        errorMessage: "",
      });
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts)
      await campaigns.methods
        .createRequest(description, web3.utils.toWei(ether, "ether"), recipient)
        .send({ from: accounts[0] });
    } catch (err) {
        this.setState({
            errorMessage: err.message,
          });
        }
        this.setState({
          isSpin: false,
        });
  };
  render() {
    return (
      <Layout>
        <h2>Create a Request</h2>
        <Form onSubmit={this.handleSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input onChange={this.handleDescription}></Input>
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input onChange={this.handleValue}></Input>
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input onChange={this.handleRecipient}></Input>
          </Form.Field>
          <Message
            error
            header="Oops! There is some error"
            content={this.state.errorMessage}
          />
          <Button loading={this.state.isSpin} primary>Submit Request</Button>
        </Form>
      </Layout>
    );
  }
}

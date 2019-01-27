import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import DataTable from "../components/DataTable";
import invoiceData from "../Data/data.json";
import "./style.css";

class Invoices extends Component {
  state = {
    id: 1,
    data: []
  };

  componentWillMount() {
    this.setState({
      data: [...invoiceData.data]
    });
  }

  render() {
    const { data, id } = this.state;
    const values = Object.values(data);
    console.log("Screen send", id);
    return (
      <div className="container">
        <h1>All Invoices For 2018</h1>
        <div className="data-table">
          <DataTable ID={id => this.setState({ id })} />
        </div>

        <div className="detail-box">
          <Card>
            <CardHeader title={values[id - 1].accountName} />
            <CardContent>Type: {values[id - 1].type}</CardContent>
          </Card>
          <Card>
            <CardContent>Acc #: {values[id - 1].accountNo} </CardContent>
            
            <CardContent>Status: {values[id - 1].status}</CardContent>
          </Card>
          <Card>
            <CardContent>Currency:{values[id - 1].currency} </CardContent>
            
            <CardContent>Balance: {values[id - 1].balance}</CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

Invoices.propTypes = {};

export default Invoices;

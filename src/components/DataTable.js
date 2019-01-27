import React, { Component } from "react";
import MUIDataTable from "mui-datatables";

import invoiceData from "../Data/data.json";

const columns = [
  {
    name: "Id",
    options: {
      filter: false,
      sort: true,
    }
  },
  {
    name: "Type",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "Acc. No",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "Acc. Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Currency",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Balance",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "Status",
    options: {
      filter: true,
      sort: false
    }
  }
];

class DataTable extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.setState({
      data: [...invoiceData.data]
    });
  }

  render() {
    const options = {
      filter: true,
      filterType: "multiSelect",
      responsive: "stacked",
      selectableRows: false,
      rowHover: true,
      onRowClick: e => {
        console.log(e[0]);
        return this.props.ID(e[0]);
      }
    };
    const formatData = this.state.data.map(e => {
      
      return [
        e.id,
        e.type,
        e.accountNo,
        e.accountName,
        e.currency,
        e.balance,
        e.status
      ];
    });

    return (
      <MUIDataTable
        title={"Accounts List"}
        data={formatData}
        columns={columns}
        options={options}
      />
    );
  }
}

export default DataTable;

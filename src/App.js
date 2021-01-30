import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tableObj: [
        {
          data: 1,
          increment: "+",
          decrement: "-"
        },
        {
          data: 2,
          increment: "+",
          decrement: "-"
        },
        {
          data: 3,
          increment: "+",
          decrement: "-"
        }
      ]
    };
  }

  incre(i) {
    const tableObj = [...this.state.tableObj];
    tableObj[i].data++;
    this.setState({ tableObj });
  }

  decre(i) {
    const tableObj = [...this.state.tableObj];
    tableObj[i].data--;
    this.setState({ tableObj });
  }

  renderTable() {
    return this.state.tableObj.map((data, i) => {
      return (
        <tr>
          <td>{data.data}</td>
          <td>
            <button onClick={() => this.incre(i)}>{data.increment}</button>
          </td>
          <td>
            <button onClick={() => this.decre(i)}>{data.decrement}</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Value</th>
            <th>Increment</th>
            <th>Decrement</th>
          </tr>
          {this.renderTable()}
        </table>
      </div>
    );
  }
}

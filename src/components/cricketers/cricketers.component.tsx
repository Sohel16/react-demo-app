import * as React from "react";
import AllPlayers from "../db2";
import { Table } from "react-bootstrap";
export default class PlayersList extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { 
        Players: AllPlayers, 
        serchFilters: {Name: null, Reporter: null, ReportingDate: null},
        sortType: 'asc'
     };
  }

  searchColumns = () => {
   
    const { serchFilters} = this.state;
    const allCols = Object.keys(serchFilters);
    const filterredPlayers = AllPlayers.filter(player => {
        let isExist = true;
        allCols.forEach((col)=>{
            if(player[col] && serchFilters[col] && player[col].toLowerCase().includes(serchFilters[col].toLowerCase()) == false){
                isExist =false;
            }
        })
      return isExist;
    });

    this.setState({ Players: filterredPlayers });
  };

  setSearchFilter = e =>{
    const colName = e.target.name;
    const colVal = e.target.value ? e.target.value: null;
    this.setState({serchFilters:{...this.state.serchFilters, [colName]: colVal}}, ()=>{
        this.searchColumns();
    })
  };

  handleSort = (sortType) => {
      this.setState({
        sortType
      })
  } 

  render() {
    const { Players, sortType } = this.state;

    const sortedPlayers = Players.sort((a, b) => {
        const isReversed =  sortType === 'asc'? 1 : -1;
        return isReversed * a.Name.localeCompare(b.Name);
    })
    return (
      <div className="section-wraper">
        <Table
          striped
          bordered
          hover
          style={{ maxWidth: "80%", margin: "0 auto" }}
          className="Cricket-table"
        >
          <thead>
            <tr>
              <th>
                <input
                  type="text"
                  name="Name"
                  onChange={this.setSearchFilter}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="Reporter"
                  onChange={this.setSearchFilter}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ReportingDate"
                  onChange={this.setSearchFilter}
                />
              </th>
            </tr>
            <tr>
              <th className="CT-head" onClick={()=>this.handleSort('desc')}>Name</th>
              <th className="CT-head" onClick={()=>this.handleSort('desc')}>Reporter</th>
              <th className="CT-head" onClick={()=>this.handleSort('desc')}>Reporting Date</th>
            </tr>
          </thead>

          <tbody>
            {sortedPlayers.map((player, idx) => {
              return (
                <tr key={idx}>
                  <td>{player.Name}</td>
                  <td>{player.Reporter}</td>
                  <td>{player.ReportingDate}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

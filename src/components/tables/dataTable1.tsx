import * as React from 'react';




export default class DataTable1 extends React.Component<any, any> {

    constructor(props){
        super(props)
        const {errorData} = props;
        
        this.state = {
            data: errorData,
            sort : {column: null, order: 1}
        }
    }

    handleSort = (column:string)=>{
        const { data, sort } = this.state;
        const sortOrder = (sort.column == column) ? (sort.order * -1) : 1;
        const sortedData = data.sort(this.dynamicSort(column, sortOrder))
        this.setState({data: sortedData, sort: {column, order:sortOrder }})
        console.log(sortedData,"Sorted data")
    }

    dynamicSort= (column, sortOrder)=> {
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[column] < b[column]) ? -1 : (a[column] > b[column]) ? 1 : 0;
            console.log('result', result)
            return result * sortOrder;
        }
    }

    componentDidMount(){
        this.handleSort("Name");
    }
    

    
    render(){
        const { data } = this.state;
       
        return (
            <div className="error-table-wraper">

                <table className="error-table">
                    <thead>
                        <tr>
                            <th onClick={()=>this.handleSort('Name')}>
                                Name
                            </th>
                            <th onClick={()=>this.handleSort('ReportingDate')}>
                                Reporting Date
                            </th>
                            <th onClick={()=>this.handleSort('Submitter')}>
                                Submitter
                            </th>
                            <th onClick={()=>this.handleSort('Reporter')}>
                                Reporter
                            </th>
                            <th onClick={()=>this.handleSort('Status')}>
                                Status
                            </th>
                            <th>
                                Error Codes
                            </th>
                        </tr>
                    </thead>
                <tbody>
                 {
                 data && data.map((er, idx) => {
                       return(   
                                <tr key={idx}>
                                    <td>{er.Name}</td>
                                    <td>{er.ReportingDate}</td>
                                    <td>{er.Submitter}</td>
                                    <td>{er.Reporter}</td>                                    
                                    <td>{er.Status}</td>
                                    <td><textarea>{er.ErrorCode.join('\n')}</textarea></td>
                                </tr>
                    )})
                }
                 </tbody>
                 </table> 
            </div>
        )
    }
}
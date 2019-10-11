import * as React from 'react';



export default class Manager extends React.Component<any, any> {

  
    render() {
        const { data } = this.props;
        console.log('dataaa', data)

        const newData  = data? Object.keys(data): null
        console.log(newData, 'NEW DATA')
        return (<div>
            <h4>manager data</h4>
            <ul>
                {newData && newData.map(el=>{
                            return <li>{el}</li>
                })}
            </ul>
            </div>
        )
    }
}
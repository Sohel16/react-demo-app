import * as React from 'react';
import axios from 'axios';


class PostDetails extends React.Component<any, any> {
    
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

   
   async componentDidMount() {
        let id =  this.props.match.params.id;
        // localStorage.setItem(id, id)
        // const gId = localStorage.getItem(id);
        //console.log('GID', gId)
        const  {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(data)
            this.setState({
                post: data
            });
    }

    render() {
       const { post } = this.state;

       const eachPostDetails = post? (
           <tbody>
               <tr>
               <td>{post.id}</td>
               <td>{post.title}</td>
               <td>{post.body}</td>
               </tr>
           </tbody>
       ) : (
           <p>Loading......</p>
       )
        return (
            <div className="details-wraper">
                <input className="goBack" onClick={() => this.props.history.goBack()} type="button" value="Go Back" />
                <h5>You're Viewing Details Page</h5>
                <table className="details-table">
                    <thead>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </thead>
                {eachPostDetails}
                </table>
            </div>
        )
    }
}

export default PostDetails;
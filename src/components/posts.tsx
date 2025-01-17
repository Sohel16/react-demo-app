import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {getPost, fetchMultiple} from '../services/postService';
import DataTable1 from '../components/tables/dataTable1';
import Manager from '../components/manager'
import Pagination from './common/pagination';
import data from './db2';
const data2 = require('../db.json');





class Posts extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorData: data,
            currentPage: 1,
            postPerPage: 5,
            search: "",
            showTable1: false,
            mgrData: null
        }
    }

    componentDidMount() {
        this.setState({
            mgrData: data2.invMgrDetailsResponse.data
        })
        this.getAllPost(); 
    }


    getAllPost = async () => {
        try{
            const {data} = await getPost();
            // const allResponses = await fetchMultiple();
            this.setState({
                posts: data
            })
        } catch(ex) {
            if(ex.response && ex.response.status !== 200){
                alert("Error while Fetching Posts")
            }

        }
    }
    

    // CHANGE PAGE

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

// HANDLING USER SEARCH AND & RESETING PAGINATION

    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        }, () => {
            this.setState({
                currentPage: 1
            })
        })
    }


    handleDelete = (post) => {
        const { posts } = this.state;
        const newPosts = posts.filter(p => p.id !== post.id);
        this.setState({
            posts:newPosts,
        });
    } 


    handleShowTable = () => {
        this.setState({
            showTable1: false
        })
        // this.props.history.push('/dataTable');
    }

    render() {

const {posts, currentPage, postPerPage, errorData, mgrData} = this.state;


console.log("error data One time", errorData)

const filteredPosts = posts.filter(p => {
    return p.title.indexOf(this.state.search) !== -1;
})
    
// GETTING CURRENT POSTS

    const indexOfLastPost = currentPage * postPerPage; // ie 1*5 = 5
    const indexOfFirstPost = indexOfLastPost - postPerPage; // 5-5=0
    const currentPostsOnPage = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
      
        const post = currentPostsOnPage? currentPostsOnPage.map(p => {
           return(
            <tr key={p.id}>
                <td className="post-id">{p.id}</td>
            <td>{p.title}</td>
            <td>{p.body}</td>
            <td className="view-post">
              <Link to={`details/${p.id}`}><input className="view" type="button" value="View"/></Link> 
            </td>
            <td className="delete-post"><input className="delete" type="button" value="Delete" onClick={() => this.handleDelete(p)}/> </td>
        </tr>
           ) 
        }): <p>Loading...</p>
        return(
            <div style={{width: "100%"}} className="post-wraper">
                <div className="add-new-post">
                <h4>My Blog</h4>
                <input type="text" 
                    placeholder="Search post..." 
                    className="search" name="search" 
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                    />
                <span><input type="button" value="Search" className="search-button"/></span>
                <input type="button" value="Add New Post" className="add-new"/>
                </div> 
                    <div className="post-table-wraper">
                    <table className="post-table" cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>{""}</th>
                                <th>{""}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {post}
                        </tbody>
                        
                    </table>

               <hr/>
                <div className="error-table-wraper">
                <DataTable1 errorData = {errorData}/>
                </div>

            <Manager data={mgrData}/>
                    
                </div>
               
                 <Pagination 
                    postPerPage={postPerPage} 
                    totalPost={posts.length} 
                    paginate={this.handlePageChange} 
                    currentPage={currentPage}
                    />
            </div>
        )
    }
}

export default withRouter(Posts);
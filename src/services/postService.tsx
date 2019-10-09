

// ALL SERVICES


import axios from 'axios';

const apiEndPoint = 'https://jsonplaceholder.typicode.com/';

const config = {
   headers: { Pragma: 'no-cache'}
}
export function getPost() {
   return axios.get(`${apiEndPoint}posts`, config);
}


export function fetchMultiple(){
   const promises = [axios.get(`${apiEndPoint}posts`, config), axios.get(`${apiEndPoint}users`, config)]
   return axios.all(promises)
}


// postService.fetchMultiple().then((allResponses)=>{})
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request=>{
    console.log(`request:${request}`);
    return request;
},error=>{
    console.log(`request error:${error}`);
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response=>{
    console.log(`response:${response}`);
    return response;
},error=>{
    console.log(`response error:${error}`);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

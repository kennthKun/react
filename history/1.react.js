import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


//render的含义就是把一个react元素渲染到dom容器内部、
//jsx js+html（xml）
ReactDOM.render(
//	<App />,
	<h1>hello</h1>,
	document.getElementById('root')
);

//ReactDOM.render(
//	React.createElement('h1',null,['hello'])
//)
//serviceWorker.unregister();

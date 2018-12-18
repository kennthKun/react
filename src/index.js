import React from 'react';
import ReactDOM from 'react-dom';
//声明一个react元素
let ele = <h1>hello</h1>;
//标签类型 属性对象 子元素
let ele2 = React.createElement('h1',null,['hello']);
//属性名都要驼峰语法className、backgroundColor
let ele3 = React.createElement('div',{className:'red'},['hello']);
//let ele3 = <div><span>hello</span></div>
//最终是这样的
let obj={type:"div",prop:{
	className:"red",
	children:['hello']
}};




ReactDOM.render(ele3,document.querySelector("#root"))




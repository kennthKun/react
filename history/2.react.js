//import React from 'react';
//import ReactDOM from 'react-dom';
//声明一个react元素
//let ele = <h1>hello</h1>;
//标签类型 属性对象 子元素
//let ele2 = React.createElement('h1',null,['hello']);
//属性名都要驼峰语法className、backgroundColor
//let ele3 = React.createElement('div',{className:'red'},['hello']);
//let ele3 = <div><span>hello</span></div>
//最终是这样的
let obj={
	type:"div",
	props:{
		className:"red",
		id:1,
		children:[
			'hello',
			{type:'span',props:{className:'blue',children:[
				'word'
			]}}
		]
	}
};

var i = 1;
function render(eleobj,container){
	console.log(eleobj,container)
	let {type,props} = obj
	let ele = document.createElement(type)
	for(let attr in props){
//		console.log(attr)
		if(attr=='children'){
			console.log(props[attr])
			props[attr].forEach(function(item){
				console.log(i++)
//				console.error("这是error");
				if(typeof(item) == 'string'){
					console.log(typeof(item))
					let node = document.createTextNode(item)
					ele.appendChild(node)
				}else{
					console.log(typeof(item))
					console.log(item)
					console.log(ele)
//					render(item,ele)
//					alert(1)
//					new Error("1")
					
				}
			})
			
		}else if(attr == 'className'){
			ele.setAttribute('class',props[attr])
		}else{
//			console.log(attr)
			ele.setAttribute(attr,props[attr])
		}
	}
	container.appendChild(ele)
}
render(obj,document.querySelector("#root"))
//ReactDOM.render(ele3,document.querySelector("#root"))




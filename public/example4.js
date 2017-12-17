var MyButton = React.createClass({

	getInitialState: function(){
		return {arr: ["Hi", "Hello", "Hey"]};
	},
	render: function(){
		return (
			<div>
				{
					this.state.arr.map(function(item, index){
						return (
							<h2 key={index}>{item}</h2>
						) 
					})
				}
			</div>
		);
	}
});

ReactDOM.render (
	<MyButton/>,
	document.getElementById("root")
);

var MyButton = React.createClass({

	getInitialState: function(){
		return {arr: [
				{name: "Hoang", say: "Hi"},
				{name: "Huy", say: "Hello"},
				{name: "Phan", say: "Hey"}
			]};
	},
	render: function(){
		return (
			<div>
				{
					this.state.arr.map(function(item, index){
						return (
							<h2 key={index}>{item.name}: {item.say}</h2>
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
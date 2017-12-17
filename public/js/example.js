var MyButton = React.createClass({
	addClick: function(){
		this.state.num = this.state.num + 1;
		this.setState(this.state);
	},
	getInitialState: function(){
		return {num: 0};
	},
	render: function(){
		return (
			<button onClick={this.addClick}>Click {this.state.num}</button>
		);
	}
});

ReactDOM.render (
	<MyButton/>,
	document.getElementById("root")
);
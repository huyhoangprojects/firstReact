var MyButton = React.createClass({
	rightClick: function(){
		this.state.num = (this.state.num  % 4) + 1;
		this.setState(this.state);
	},
	leftClick: function(){
		this.state.num = ((this.state.num + 2)  % 4) + 1; // number decrease 4-3-2-1-4  (loai tru chia du 0 va 1)
		this.setState(this.state);
	},
	getInitialState: function(){
		return {num: 1};
	},
	render: function(){
		return (
			<div>
				<img src={"images/" + this.state.num + ".jpg"}/>
				<hr/>
				
				<button onClick={this.leftClick}>Left</button>
				<button onClick={this.rightClick}>Right</button>
			</div>
		);
	}
});

ReactDOM.render (
	<MyButton/>,
	document.getElementById("root")
);
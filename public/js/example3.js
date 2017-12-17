var MyButton = React.createClass({
	changeImage: function(){
		this.state.num = (this.state.num  % 4) + 1;
		this.setState(this.state);
	},
	getInitialState: function(){
		return {num: 1};
	},
	render: function(){
		return (
			<div>
				<img src={"images/" + this.state.num + ".jpg"}/>
			</div>
		);
	},
	componentDidMount: function() {
		setInterval(this.changeImage, 1000);
	}
});

ReactDOM.render (
	<MyButton/>,
	document.getElementById("root")
);
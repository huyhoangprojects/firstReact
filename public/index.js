function getName(name) {
	alert(name);
}

var MyComponent = React.createClass({
	getAttitude: function() {
		alert(this.props.children);
	},
	getInitialState: function(){
		return {total: this.props.total};
	},
	addStudent: function() {
		this.setState({total: parseInt(this.state.total) + 1});
	},
	render: function(){
		return (
			<div>
				<h1> Hello {this.props.name} </h1>
				<h2> I {this.props.children} {this.props.name} </h2>
				<p>Total: {this.state.total}</p>
				<MyChildComponent name={this.props.name} />
				<button onClick={() => getName(this.props.children)}>Get</button>
				<button onClick={this.addStudent}>Add</button>
			</div>
		);
	}
});
var MyChildComponent = React.createClass({
	render: function(){
		return (
			<h3> Code {this.props.name} </h3>
		);
	}
});

ReactDOM.render (
	<div>
		<MyComponent name ="ReactJS" total="5">Love </MyComponent>
		<hr />
		<MyComponent name ="NodeJS" total="15"> Hate </MyComponent>
	</div>,
	document.getElementById("root")
);
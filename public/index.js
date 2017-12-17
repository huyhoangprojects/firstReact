function getName(name) {
	alert(name);
}

var MyComponent = React.createClass({
	getAttitude: function() {
		alert(this.props.children);
	},
	render: function(){
		return (
			<div>
				<h1> Hello {this.props.name} </h1>
				<h2> I {this.props.children} {this.props.name} </h2>
				<MyChildComponent name={this.props.name} />
				<button onClick={() => getName(this.props.children)}>Get</button>
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
		<MyComponent name ="ReactJS">Love </MyComponent>
		<hr />
		<MyComponent name ="NodeJS"> Hate </MyComponent>
	</div>,
	document.getElementById("root")
);
var MyComponent = React.createClass({
	render: function(){
		return (
			<div>
				<h1> Hello {this.props.name} </h1>
				<h2> I {this.props.children} {this.props.name} </h2>
				<MyChildComponent name={this.props.name} />
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
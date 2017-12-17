var MyComponent = React.createClass({
	render: function(){
		return (
			<div>
				<h1> Hello {this.props.name} </h1>
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
		<MyComponent name ="ReactJS"/>
		<MyComponent name ="NodeJS"/>
	</div>,
	document.getElementById("root")
);
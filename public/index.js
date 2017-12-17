var MyComponent = React.createClass({
	render: function(){
		return (
			<div>
				<h1> Hello ReactJS </h1>
				<MyChildComponent />
			</div>
		);
	}
});
var MyChildComponent = React.createClass({
	render: function(){
		return (
			<h3> Code ReactJS </h3>
		);
	}
});

ReactDOM.render (
	<MyComponent />,
	document.getElementById("root")
);
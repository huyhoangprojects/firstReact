var MyComponent = React.createClass({
	render: function(){
		return (
			<h1> Hello ReactJS </h1>
		);
	}
});

ReactDOM.render (
	<MyComponent />,
	document.getElementById("root")
);
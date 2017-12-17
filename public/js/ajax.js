function addForm() {
	ReactDOM.render (
		<MyForm />,
		document.getElementById("add")
	);
}
var list;
var MyList = React.createClass({
	getInitialState: function(){
		list = this;
		return {arr: ["Hi", "Hello", "Hey"]};
	},
	render: function(){
		return (
			<div className="list-box__list-note">
				<div id="add"></div>
				{
					this.state.arr.map(function(item, index){
						return <MyNote key={index}>{item}</MyNote>
					})
				}				
			</div>
		);
	}
});
var MyNote = React.createClass({
	render: function(){
		return (
			<div className="list-box__note">{this.props.children}</div>
		);
	}
});
var MyForm = React.createClass({	
	send: function(){
		list.setState({arr: list.state.arr.concat(this.refs.txt.value)});
	},
	render: function(){
		return (
			<div className="list-box__form">
				<input className="list-box__input" ref="txt" type="text" />
				<button onClick={this.send} className="list-box__save">Save</button>
			</div>
		);
	}
});
var MyAddButton = React.createClass({
	render: function(){
		return (
			<button onClick={addForm} className="list-box__add">+</button>
		);
	}
});

ReactDOM.render (
	<div className="list-box">
		<MyAddButton />
		<MyList />
	</div>,
	document.getElementById("root")
);
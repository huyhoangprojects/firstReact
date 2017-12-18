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
		return {arr: []};
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
	},
	componentDidMount() {
		var that = this;
		$.post("/getNotes", function(data) {
			that.setState({arr: data});
		});
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
		$.post("/add", {note: this.refs.txt.value}, function(data){
			list.setState({arr: data});
		});
		ReactDOM.unmountComponentAtNode(document.getElementById("add"));
	},
	render: function(){
		return (
			<div className="list-box__form">
				<input className="list-box__input" ref="txt" type="text" placeholder="Enter your note"/>
				<button onClick={this.send} className="list-box__save">Save</button>
			</div>
		);
	}
});
var MyAddButton = React.createClass({
	render: function(){
		return (
			<button onClick={addForm} className="list-box__add" id="list-box__add">+</button>
		);
	}
});

ReactDOM.render (
	<div className="list-box">
		<div id="list-box__button">
			<MyAddButton />
		</div>		
		<MyList />
	</div>,
	document.getElementById("root")
);
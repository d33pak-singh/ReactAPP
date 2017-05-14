var React = require('react');

var ErrorModal = React.createClass({
	componentDidMount: function(){
		var modal = new Foundation.Reveal($('#error-modal'));
			modal.open();
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	render: function() {
		var {title, message} = this.props
		return (
				<div id="error-modal" data-reveal="" className="reveal tiny text-center">
					<h4>{title}</h4>
					<p>{message}</p>
					<p>
						<button className="button hollow" data-close="">
							Okay
						</button>
					</p>
				</div>
			);
	}
});

module.exports = ErrorModal;
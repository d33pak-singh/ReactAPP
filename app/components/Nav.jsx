var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return (
			<div>
				<h3>Nav Components</h3>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
			</div>
		)
}
module.exports = Nav;
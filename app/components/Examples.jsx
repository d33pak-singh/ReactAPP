var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
	return(
			<div>
				<h3 className="text-center">Example Components</h3>
				<p>Here Examples will be listed!</p>
				<ol>
					<li>
						<Link to='/?location=Noida'>Noida</Link>
					</li>
					<li>
						<Link to='/?location=Jammu'>Jammu</Link>
					</li>
				</ol>
			</div>
		  )
};

module.exports = Example;
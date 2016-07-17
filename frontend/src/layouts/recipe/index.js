import React from 'react'
import App from '../app'

require('./index.styl')

export default React.createClass({
  render: () => {
    return (
    	<App>
	      <div className="movie">
	        Movie
	      </div>
      	</App>
    );
  },
});

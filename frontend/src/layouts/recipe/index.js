import React from 'react'
import App from '../app'

require('./index.styl')

export default React.createClass({
  render: () => {
    return (
    	<App>
	      <div className="recipe">
	        Recipe
	      </div>
      	</App>
    );
  },
});

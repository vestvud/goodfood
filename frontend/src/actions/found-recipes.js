import fetch from 'isomorphic-fetch'

export const findRecipes = (text) => {
 return dispatch => {
	fetch(`/findRecipes/${text}`) 
	  .then(  
	    function(response) {  
	      if (response.status !== 200) {  
	        console.log('Looks like there was a problem. Status Code: ' +  response.status);  
	        return;  
	      }

	      response.json().then(function(data) {  
	        console.log(data, 'data');
	    	dispatch(setFoundRecipes(data));
	      });  
	    }  
	  )  
	  .catch(function(err) {  
	    console.log('Fetch Error :-S', err);  
	  });
 }
}

export const setFoundRecipes = (data) => {
	return {
		type: 'SET_FOUND_RESIPES',
		data
	}
}

export const clearFoundRecipes = (data) => {
	return {
		type: 'CLEAR_FOUND_RESIPES'
	}
}
export default (recipes = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      console.log(action, 'a1')
      recipes.push({
      	data: action.data,
      	id: action.id
      });
      console.log(recipes, 're')	
      return recipes;
    default:
      return recipes;
  }
}
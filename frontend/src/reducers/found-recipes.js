export default (foundRecipes = [], action) => {
  switch (action.type) {
    case 'SET_FOUND_RESIPES':
      return action.data.map((data)=>{
        return {
          data: data,
          id: Math.random()
        };
      });
    case 'CLEAR_FOUND_RESIPES':
      return [];  
    default:
      return foundRecipes;
  }
}
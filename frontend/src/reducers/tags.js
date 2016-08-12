export default (tags = {}, action) => {
  switch (action.type) {
    case 'ADD_TAG':
      tags.push(action);
      return tags;	
    default:
      return tags;
  }
}
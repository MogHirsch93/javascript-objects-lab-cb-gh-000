var recipes = {prop: 1;

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({}, recipes, {[key]: value})
  return newRecipes
}

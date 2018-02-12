const recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({}, recipes, {[key]: value})
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(object, key){
  delete recipes.[key];
}

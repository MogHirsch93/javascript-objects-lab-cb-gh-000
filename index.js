const recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({}, recipes, {[key]: value})
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;

  return obj;
}

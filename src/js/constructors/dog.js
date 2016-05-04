
let Dog = function (params) {

  let localParams = params || {};

  this.status = 'normal';
  this.color = localParams.color || 'black';
  this.hungry = false;

}

export default Dog;


//ternary  for  hungry = undefined  if undefined = true  else is false (set it to what is was)

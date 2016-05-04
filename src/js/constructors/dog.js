
let Dog = function (params) {

  let localParams = params || {};

  // let hunger = (localParams.hungry=== undefined) ? true : localParams.hungry;

  this.status = 'normal';
  this.color = localParams.color || 'black';
  this.hungry = (localParams.hungry=== undefined) ? true : localParams.hungry;
}

export default Dog;


//ternary  for  hungry = undefined  if undefined = true  else is false (set it to what is was)

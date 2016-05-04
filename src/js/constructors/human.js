let Human = function (params) {

  let localParams = params || {};

  this.pet = function(petObj){
    petObj.status = 'happy';
  };

  this.feed = function(petObj){
    petObj.hungry = false;
};

this.cool = (localParams.cool === undefined) ? false : localParams.cool;
  // function make(item){
  //   item.cool = true;
  // }
};

export default Human;

let Human = function () {
  this.pet = function(petObj){
    petObj.status = 'happy';
  };

  this.feed = function(petObj){
    petObj.hungry =false;
};
  this.make = function(petObj){
    petObj.cool = true;
  }
};

export default Human;

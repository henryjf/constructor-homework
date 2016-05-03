let Human = function (passedTraits) {
  let traits = passedTraits || {};;

  this.name = traits.name;
  this.owner= traits.owner;
  

}


// function testRunner (sadie, moonshine, atticus, mason, julia) {
//
//   it("should make Sadie happy when Mason pets her", function(){
//     expect(sadie.status).toBe('normal');
//     mason.pet(sadie);
//     expect(sadie.status).toBe('happy');
//   });
export default Human;

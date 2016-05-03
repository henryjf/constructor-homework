let Dog = function (traitsPassed) {

  let traits = traitsPassed || {};

  this.name = traits.name;
  this.status = traits.happy;
  this.color = traits.black;
}


// function testRunner (sadie, moonshine, atticus, mason, julia) {
//
//   it("should make Sadie happy when Mason pets her", function(){
//     expect(sadie.status).toBe('normal');
//     mason.pet(sadie);
//     expect(sadie.status).toBe('happy');
//   });











export default Dog;

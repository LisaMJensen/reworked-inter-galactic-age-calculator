import {userInfo} from './../src/ageCalc.js';


describe ("userInfo", function() {

  //beforeEach not working?

it("Should test the user's inputted info and return the correct values", function() {

  var testBirthDate = new Date(1993, 10, 7);
  var testUserInfo = new userInfo (testBirthDate);
  var currentDate = new Date();
   expect(testUserInfo.birthDate.getFullYear()).toEqual(1993);
   expect(testUserInfo.birthDate.getMonth()).toEqual(10);
   expect(testUserInfo.birthDate.getDate()).toEqual(7);
 });

//test planet age functions

 it("Should give the current earth age", function() {
   var testBirthDate = new Date(1993, 10, 7);
   var testUserInfo = new userInfo (testBirthDate);
   var currentDate = new Date();
   let currentAge = (currentDate.getFullYear() - testUserInfo.birthDate.getFullYear());
   expect(currentAge).toEqual(26);

 });

 it("Should test the mercuryAge function", function() {
   var testBirthDate = new Date(1993, 10, 7);
   var testUserInfo = new userInfo (testBirthDate);
   var currentDate = new Date();
   let mercuryAge = testUserInfo.mercuryAge();
   expect(mercuryAge).toEqual(104.16666666666667)
 });

 it("Should test the venusAge function", function() {
   var testBirthDate = new Date(1993, 10, 7);
   var testUserInfo = new userInfo (testBirthDate);
   var currentDate = new Date();
   let venusAge = testUserInfo.venusAge();
   expect(venusAge).toEqual(40.32258064516129)
 });

 it("Should test the marsAge function", function() {
   var testBirthDate = new Date(1993, 10, 7);
   var testUserInfo = new userInfo (testBirthDate);
   var currentDate = new Date();
    let marsAge = testUserInfo.marsAge();
    expect(marsAge).toEqual(13.297872340425533)
  });

  it("Should test the jupiterAge function", function() {
    var testBirthDate = new Date(1993, 10, 7);
    var testUserInfo = new userInfo (testBirthDate);
    var currentDate = new Date();
    let jupiterAge = testUserInfo.jupiterAge();
    expect(jupiterAge).toEqual(2.1079258010118043)
  });

// test life expectancy functions


  it("Should test the mercuryLifeExpectancy function", function() {
    var testBirthDate = new Date(1993, 10, 7);
    var testUserInfo = new userInfo (testBirthDate);
    var currentDate = new Date();
    let mercuryLifeExpectancy = testUserInfo.mercuryLifeExpectancy();
    expect(mercuryLifeExpectancy).toEqual(220.83333333333334)
  });

  it("Should test the venusLifeExpectancy function", function() {
    var testBirthDate = new Date(1993, 10, 7);
    var testUserInfo = new userInfo (testBirthDate);
    var currentDate = new Date();
    let venusLifeExpectancy = testUserInfo.venusLifeExpectancy();
    expect(venusLifeExpectancy).toEqual(85.48387096774194)
  });

  it("Should test the marsLifeExpectancy function", function() {
    var testBirthDate = new Date(1993, 10, 7);
    var testUserInfo = new userInfo (testBirthDate);
    var currentDate = new Date();
    let marsLifeExpectancy = testUserInfo.marsLifeExpectancy();
    expect(marsLifeExpectancy).toEqual(28.19148936170213)
  });

  it("Should test the jupiterLifeExpectancy function", function() {
    var testBirthDate = new Date(1993, 10, 7);
    var testUserInfo = new userInfo (testBirthDate);
    var currentDate = new Date();
    let jupiterLifeExpectancy = testUserInfo.jupiterLifeExpectancy();
    expect(jupiterLifeExpectancy).toEqual(4.4688026981450255)
  });



 // it("should total 4", function() {
 //   let banana = 1
 //   let strawberry = 3
 //   expect(banana + strawberry).toEqual(4);
 // });

});

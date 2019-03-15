import { galacticAge } from "../src/backEnd.js";

describe('galacticAge', function() {
  it('should calculate the users age in Venetian years', function() {
    //Test content will go here.
    const venusYears = new galacticAge(44);
    expect(venusYears.getVenus(venusYears.earth)).toEqual(27.28);
  });










  //
  // it('should count the number of vowels in a word', function() {
  //   //Test content will go here.
  //   const haiku = new Haiku('tiim', 'he', 'did');
  //   expect(haiku.findVowels(haiku.first)).toEqual(2);
  // });
  //


});

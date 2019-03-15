import { galacticAge } from "../src/backEnd.js";

describe('galacticAge', function() {
  it('should calculate the users age in Mercurial years', function() {
    const mercuryYears = new galacticAge(44);
    expect(mercuryYears.getMercury(mercuryYears.earth)).toEqual('10.56');
  });
});
describe('galacticAge', function() {
  it('should calculate the users age in Venetian years', function() {
    const venusYears = new galacticAge(44);
    expect(venusYears.getVenus(venusYears.earth)).toEqual('27.28');
  });
});
describe('galacticAge', function() {
  it('should calculate the users age in Martian years', function() {
    const marsYears = new galacticAge(44);
    expect(marsYears.getMars(marsYears.earth)).toEqual('82.72');
  });
});
describe('galacticAge', function() {
  it('should calculate the users age in Jupiterian years', function() {
    const jupiterYears = new galacticAge(44);
    expect(jupiterYears.getJupiter(jupiterYears.earth)).toEqual('521.84');
  });
});
describe('galacticAge', function() {
  it('should calculate the users remaining life span in earth years', function() {
    const lastYears = new galacticAge(44);
    expect(lastYears.getLifeSpan(lastYears.earth)).toEqual(35);
  });
});









  //
  // it('should count the number of vowels in a word', function() {
  //   //Test content will go here.
  //   const haiku = new Haiku('tiim', 'he', 'did');
  //   expect(haiku.findVowels(haiku.first)).toEqual(2);
  // });
  //
// });

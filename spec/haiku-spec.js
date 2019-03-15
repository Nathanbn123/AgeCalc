import { Haiku } from "../src/backEnd.js";

describe('Haiku', function() {

  it('should count the number of vowels in a word', function() {
    //Test content will go here.
    const haiku = new Haiku('tiim', 'he', 'did');
    expect(haiku.findVowels(haiku.first)).toEqual(2);
  });

  it('should subtract any silent vowels', function() {
    //Test content will go here.
    const haiku = new Haiku('tiim', 'he', 'did');
    expect(haiku.findSilents(haiku.first)).toEqual(1);
  });

});

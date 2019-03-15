export class galacticAge {
  constructor (age) {
    this.earth = age;
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
  }

  getMercury(age) {
    let mercury = age * .24;
    return mercury.toFixed(2);
  }

  getVenus(age) {
    let venus = age * .62;
    return venus.toFixed(2);
  }

  getMars(age) {
    let mars = age * 1.88;
    return mars.toFixed(2);
  }

  getJupiter(age) {
    let jupiter = age * 11.86;
    return jupiter.toFixed(2);
  }

  getLifeSpan(age) {
    let remainingYears = 79 - age;
    return remainingYears;
  }

  formatAges(age) {
    const galacticArray = []
    let mercuryAge = this.getMercury(this.earth)
    let venusAge = this.getVenus(this.earth)
    let marsAge = this.getMars(this.earth)
    let jupiterAge = this.getJupiter(this.earth)
    galacticArray.push(mercuryAge, venusAge, marsAge, jupiterAge);
    return galacticArray;

  }



}

















// export class Haiku {
//   constructor (line1, line2, line3) {
//     this.first = line1;
//     this.second = line2;
//     this.third = line3;
//     this.vowels1 = 0;
//     this.vowels2 = 0;
//     this.vowels3 = 0;
//   }
//   findWords(line) {
//     const wordsArr = [];
//     wordsArr.push(line.split(' '));
//     return wordsArr
//   }

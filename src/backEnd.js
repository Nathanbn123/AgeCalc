export class galacticAge {
  constructor (age) {
    this.earth = age;
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
  }

getMercury(earth) {
  let mercury = earth * .24;
  return mercury.toFixed(2);
}

getVenus(earth) {
  let venus = earth * .62;
  return venus.toFixed(2);
}

getMars(earth) {
  let mars = earth * 1.88;
  return mars.toFixed(2);
}

getJupiter(earth) {
  let jupiter = earth * 11.86;
  return jupiter.toFixed(2);
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

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
  return mercury;
}

getVenus(earth) {
  let venus = earth * .62;
  return venus;
}

getMars(earth) {
  let mars = earth * 1.88;
  return mars;
}

getJupiter(earth) {
  let jupiter = earth * 1.88;
  return jupiter;
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

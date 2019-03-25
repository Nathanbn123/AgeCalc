import { galacticAge } from "../src/backEnd.js";

  describe('getMercury', function() {
    it('should calculate the users age in Mercurial years', function() {
      const mercuryYears = new galacticAge(44);
      expect(mercuryYears.getMercury(mercuryYears.earth)).toEqual('10.56');
    });
  });

  describe('getVenus', function() {
    it('should calculate the users age in Venetian years', function() {
      const venusYears = new galacticAge(44);
      expect(venusYears.getVenus(venusYears.earth)).toEqual('27.28');
    });
  });

  describe('getMars', function() {
    it('should calculate the users age in Martian years', function() {
      const marsYears = new galacticAge(44);
      expect(marsYears.getMars(marsYears.earth)).toEqual('82.72');
    });
  });

  describe('getJupiter', function() {
    it('should calculate the users age in Jupiterian years', function() {
      const jupiterYears = new galacticAge(44);
      expect(jupiterYears.getJupiter(jupiterYears.earth)).toEqual('521.84');
    });
  });

  describe('getLifeSpan', function() {
    it('should calculate the users remaining life span in earth years', function() {
      const lastYears = new galacticAge(44);
      expect(lastYears.getLifeSpan(lastYears.earth)).toEqual(35);
    });
  });

  describe('formatAges', function() {
    it('should calculate the users age on each planet and alter the object to reflect said ages', function() {
      const human = new galacticAge(44);
      expect(human.formatAges()).toEqual(["10.56", "27.28", "82.72", "521.84"]);
    });
  });

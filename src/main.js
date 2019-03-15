import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { galacticAge } from "../src/backEnd.js";

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let human = new galacticAge($('age-form').val());
    human.mercury = human.getMercury(human.earth);
    human.venus = human.getVenus(human.earth);
    human.venus = human.getMars(human.earth);
    human.venus = human.getJupiter(human.earth);


  });
});

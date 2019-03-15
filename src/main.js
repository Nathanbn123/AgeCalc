import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { galacticAge } from "../src/backEnd.js";

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    let human = new galacticAge($('age-form').val());




  });
});

import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import $ from 'jquery';
import { galacticAge } from "../src/backEnd.js";

$(document).ready(function() {
  $('.age-form').submit(function(event) {
    event.preventDefault();
    $('.info-output').empty();
    let human = new galacticAge($('#user-age').val());
    console.log(human)
    human.mercury = human.getMercury(human.earth);
    human.venus = human.getVenus(human.earth);
    human.mars = human.getMars(human.earth);
    human.jupiter = human.getJupiter(human.earth);
    $('.info-output').append("<li>" + "You are" + " " + human.mercury + " " + "years old in Mercury years!" + "</li>")
    $('.info-output').append("<li>" + "You are" + " " + human.venus + " " + "years old in Venus years!" + "</li>")
    $('.info-output').append("<li>" + "You are" + " " + human.mars + " " + "years old in Mars years!" + "</li>")
    $('.info-output').append("<li>" + "You are" + " " + human.jupiter + " " + "years old in Jupiter years!" + "</li>")
    console.log(human);
    let lifeLeft =  human.getLifeSpan(human.earth)
    human.earth = lifeLeft;
    human.formatAges();
    $('.info-output').append("<li>" + "You have aproximately" + " " + human.mercury + " " + "years left to live in Mercury years!" + "</li>")
    $('.info-output').append("<li>" + "You have aproximately" + " " + human.venus + " " + "years left to live in Venus years!" + "</li>")
    $('.info-output').append("<li>" + "You have aproximately" + " " + human.mars + " " + "years left to live in Mars years!" + "</li>")
    $('.info-output').append("<li>" + "You have aproximately" + " " + human.jupiter + " " + "years left to live in Jupiter years!" + "</li>")
  
    console.log(human);



  });
});

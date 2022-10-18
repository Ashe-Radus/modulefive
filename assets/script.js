//this will hold user input and save it to the local storage. 

var formEl = $('#schedule');
var nineEl = $('input[name="nine"]');
var tenEl = $('input[name="ten"]');
var elevenEl = $('input[name="eleven"]');
var twelveEl = $('input[name="twelve"]');
var oneEl = $('input[name="one"]');
var twoEl = $('input[name="two"]');
var threeEl = $('input[name="three"]');
var fourEl = $('input[name="four"]');
var fiveEl = $('input[name="five"]');
//var textEl =$('input[text]');

function handleFormSubmit(event){
event.preventDefault();

var meetingItem = $('input[name="nine"]').val();

console.log('nine:', nineEl.val());
console.log('ten:', tenEl.val());
}
//localStorage.setItem('text');

formEl.on('submit',handleFormSubmit);

//borrowed from webfx for how to add moment js 
(function() {
    var NowMoment = moment();
    var NowDate = new Date(); 
    var eDisplayMoment = document.getElementById('displayMoment'); eDisplayMoment.innerHTML = NowMoment
    var eDisplayDate = document.getElementById('displayJsDate'); eDisplayDate.innerHTML = NowDate; })(); 
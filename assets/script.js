//this will hold user input and save it to the local storage. 

var formEl = $('#schedule');
var meetingsListEl = $('#meeting-list');

function handleFormSubmit(event){
    event.preventDeafult();
    var nineEl = $('input.[name="nine"]').val();
    var tenEl = $('input[name="ten"]').val();
    var elevenEl = $('input[name="eleven"]').val();
    var twelveEl = $('input[name="twelve"]').val();
    var oneEl = $('input[name="one"]').val();
    var twoEl = $('input[name="two"]').val();
    var threeEl = $('input[name="three"]').val();
    var fourEl = $('input[name="four"]').val();
    var fiveEl = $('input[name="five"]').val();

console.log(nineEl);
console.log(tenEl);
console.log(elevenEl);
console.log(twelveEl);
console.log(oneEl);
console.log(twoEl);
console.log(threeEl);
console.log(fourEl);
console.log(fiveEl);

formEl.append();
}
formEl.on('submit', handleFormSubmit); 

//borrowed from webfx for how to add moment js 
(function() {
    var NowMoment = moment();
    var NowDate = new Date(); 
    var eDisplayMoment = document.getElementById('displayMoment'); eDisplayMoment.innerHTML = NowMoment
    var eDisplayDate = document.getElementById('displayJsDate'); eDisplayDate.innerHTML = NowDate; })(); 


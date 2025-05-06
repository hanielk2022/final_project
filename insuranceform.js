var choice1 = document.getElementById("income1");
var choice2 = document.getElementById("income2");
var choice3 = document.getElementById("income3");
var choice4 = document.getElementById("income4");
const eligibilityform = document.getElementById("eligibilityform");
var famsize = document.getElementById("familysize");
const submit = document.getElementById("formsubmit");


submit.addEventListener("click", function(){
    document.getElementById('container').innerHTML = '';
    alert('info has been submitted !!');
    document.getElementById('submissionmessage').innerHTML = 'Thank you for your submission! Call this number <u>(1-800-555-4826)</u> to speak with one of our eligibility specialists';
});



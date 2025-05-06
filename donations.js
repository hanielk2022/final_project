
var donationform = document.getElementById('donationform');
var content = document.getElementById('content');
//var submission = document.getElementById('submission');

document.getElementById('donationbutton').addEventListener('click',function(){
    content.innerHTML = '';
    var message = document.createElement('h4');
    message.innerHTML = 'Thank you for your generous donation ! <br><br>';

    var backtodonations = document.createElement('a');
    backtodonations.textContent = "go back to donations page";
    backtodonations.href = "donations.html";
    var backtohome = document.createElement('a');
    backtohome.textContent = "go back to home page";
    backtohome.href = "index.html"

    backtodonations.style.backgroundColor = 'gray';
    backtodonations.style.color = 'white';
    backtodonations.style.padding = '10px 15px';
    backtodonations.style.border = 'none';
    backtodonations.style.borderRadius = '5px';
    backtodonations.style.marginTop = '10px';
    backtodonations.style.cursor = 'pointer';

    backtohome.style.backgroundColor = 'gray';
    backtohome.style.color = 'white';
    backtohome.style.padding = '10px 15px';
    backtohome.style.border = 'none';
    backtohome.style.borderRadius = '5px';
    backtohome.style.marginTop = '10px';
    backtohome.style.cursor = 'pointer';

    document.body.appendChild(message);
    document.body.appendChild(backtodonations);
    document.body.appendChild(backtohome);
});
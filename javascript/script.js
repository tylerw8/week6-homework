//Tyler Waite week 6 homework javascript page.
//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".

function signIn (){
 alert("Thanks for signing in!");
}

//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

function signUp (){
 var email = prompt("Please enter your email");
 document.getElementById("output-here").innerHTML = ("Thanks for signing up " + email + " !");
}

//Extra credit button function
function whoahDude (){
 alert("Whooooah Duuuuuuuude!");
}
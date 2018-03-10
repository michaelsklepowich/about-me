"use strict";

var answersCorrect = 0;

function gameStart (){
  alert('Hi! We are going to play a guessing game. I am going to ask you five questions about myself and you are going to answer with YES or NO.');
}

// First Question
function firstQuestion() {
  var firstQuestionAns = prompt('Am I older than 21 years old?');
  firstQuestionAns = firstQuestionAns.toUpperCase();
  console.log('The user answered the first question with ' + firstQuestionAns);
  if (firstQuestionAns === 'YES' || firstQuestionAns === 'Y') {
    alert('Incorrect! I am only 19 years old. I turn 20 next month.');
  }
  else if (firstQuestionAns === 'NO' || firstQuestionAns === 'N'){
    alert('Correct! I am only 19 years old. I turn 20 next month.');
    answersCorrect++;
  }
  else {
    alert('Please answer with "Yes" or "No."');
  }
}

// Second Question
function secondQuestion() {
  var secondQuestionAns = prompt('Do I go to university in Canada');
  secondQuestionAns = secondQuestionAns.toUpperCase();
  console.log('The user answered the second question with ' + secondQuestionAns);


  if (secondQuestionAns === 'YES' || secondQuestionAns === 'Y') {
    alert('Correct! I go to the university of Waterloo in Ontario, Canada.');
    answersCorrect++;
  }
  else if (secondQuestionAns === 'NO' || secondQuestionAns === 'N'){
    alert('Incorrect! I do actually go to school in Canada despite being born and raised in Washington State.');
  }
  else {
    alert('Please answer with "Yes" or "No."');
  }
}
// Third Question
function thirdQuestion() {
  var thirdQuestionAns = prompt('Is my favorite pasta shape bowtie?');
  thirdQuestionAns = thirdQuestionAns.toUpperCase();
  console.log('The user answered the third question with ' + thirdQuestionAns);


  if (thirdQuestionAns === 'YES' || thirdQuestionAns === 'Y') {
    alert('Incorrect! My favorite pasta shape is wagonwheel.')
  }
  else if (thirdQuestionAns === 'NO' || thirdQuestionAns === 'N'){
    alert('Correct! My favorite pasta shape is wagonwheel.');
    answersCorrect++;
  }
  else {
    alert('Please answer with "Yes" or "No."');
  }
}
// Fourth Question
function fourthQuestion() {
  var fourthQuestionAns = prompt('Am I a computer science major?');
  fourthQuestionAns = fourthQuestionAns.toUpperCase();
  console.log('The user answered the fourth question with ' + fourthQuestionAns);


  if (fourthQuestionAns === 'YES' || fourthQuestionAns === 'Y') {
    alert('Incorrect! I\'m actually a biochemistry major.')
  }
  else if (fourthQuestionAns === 'NO' || fourthQuestionAns === 'N'){
    alert('Correct! I\'m actually a biochemistry major.');
    answersCorrect++;
  }
  else {
    alert('Please answer with "Yes" or "No."');
  }
}
// Fifth Question
function fifthQuestion() {
  var fifthQuestionAns = prompt('Is my favorite thing having clean socks?');
  fifthQuestionAns = fifthQuestionAns.toUpperCase();

  if (fifthQuestionAns === 'YES' || fifthQuestionAns === 'Y') {
    alert('Correct! Clean socks are the best!');
    answersCorrect++;
  }
  else if (fifthQuestionAns === 'NO' || fifthQuestionAns === 'N'){
    alert('Incorrect! Clean socks are the best.');
  }
  else {
    alert('Please answer with "Yes" or "No."');
  }
}
//Sixth Question
function sixthQuestion() {
var birthday = 23;
alert('What numerical day of the month was I born on? You have 4 guesses.');

for (var i = 0; i < 6; i++) {
  var counter = 1 + i;
  var guessLeft = 4 - counter;
  var sixthQuestionAns = prompt('GUESS ' + counter);
  console.log('The user answered the sixth question with ' + sixthQuestionAns);
  sixthQuestionAns = parseInt(sixthQuestionAns);
  if (sixthQuestionAns === birthday) {
    alert('You got it! It only took you ' + counter + ' guess(es).');
    answersCorrect++;
    break
  } else if (sixthQuestionAns > birthday) {
    counter++;
    alert('That guess was too high! You have ' + guessLeft + ' guess(es) remaining');
  }
    else if (sixthQuestionAns < birthday) {
    counter++;
    alert('That guess was too low! You have ' + guessLeft + ' guess(es) remaining')
    }
    else if(i === 5) {
      alert('You are out of guesses. The answer was ' + birthday);
    }
  }
}
//Seventh Question
function seventhQuestion() {
var flavors = ['vanilla', 'chocolate', 'cookie dough', 'caramel'];
alert('Can you guess one of my favorite flavors of ice cream?');
var seventhQuestionAns = prompt('Guess a flavor!');
seventhQuestionAns = seventhQuestionAns.toLowerCase();
console.log('The user answered the seventh question with ' + seventhQuestionAns);
for (var i = 0; i < flavors.length; i++) {
  if (flavors[i] === seventhQuestionAns) {
    alert('You got it, ' + seventhQuestionAns + ' is one my favorites!');
    answersCorrect++;
  } else {
    alert('Nope, sorry ' + seventhQuestionAns + ' is not one of my favorites.');
    break
  }
}

alert('You answered ' + answersCorrect + ' question(s) correctly.');
console.log('The user answered ' + answersCorrect + ' question(s) correctly.');
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();

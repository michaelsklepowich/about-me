"use strict";

alert('Hi! We are going to play a guessing game. I am going to ask you five questions about myself and you are going to answer with YES or NO.');

var answersCorrect = 0;

// First Question
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

// Second Question
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

// Third Question
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

// Fourth Question
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

// Fifth Question
var fifthQuestionAns = prompt('Is my favorite thing having clean socks?');
fifthQuestionAns = fifthQuestionAns.toUpperCase();
console.log('The user answered the fifth question with ' + fifthQuestionAns);


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

alert('You answered ' + answersCorrect + ' questions correctly.');
console.log('The user answered ' + answersCorrect + ' questions correctly.');

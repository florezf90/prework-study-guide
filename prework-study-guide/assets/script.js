
var topics = ['HTML, CSS, GIT, JavaScript']

var randomtopics = topics[Math.floor(Math.random() * topics.length)];

function listoftopics() {
   

   for(var x = 0;  x <topics.length; x++) {
   
       console.log(topics[x]);
   }
   }
   
function selectopic() {
   
 if (topics [0] === 'HTML') {
console.log("let's study HTML");

 } else if (topics[0] === 'CSS') {

    console.log("let's study CSS!!");

 } else if (topics [0] ==  'Git') {

    console.log("let's study git!!");

 } else if (topics [0] === 'JavaScript') {

    console.log("let's study JavaScript!!");
 } else {

    console.log("Vamos a fumar marihuana, HPTA!!!!");
 }
}

console.log("Here are the topics we have learned through the prework so far:");

listoftopics();

console.log("Which topic are we going to study first??? >:v");

selectopic();



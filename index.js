var readlineSync = require("readline-sync"); 

console.log("Welcome Welcome Welcome!!!");

console.log("\n");

console.log("This is a quiz about me. The catch is if you answer all the question given below correctly and win a chance to get a treat from me at Barbeque Nation!!!");

console.log("\n");

console.log("This quiz is like a game.......");

var userAnswer = readlineSync.question("Are you ready to play the game ??? ");

console.log("\n");

console.log(userAnswer);

if(userAnswer==="yes"){
  console.log("OKKK!!! Lets start.......");
}else{
  console.log("OOPS...Sorry try again!!!");
}

console.log("Level-01")
var score = 0;

function game(question,answer){
  var questions = readlineSync.question(question);
  if(questions===answer){
    console.log("Great!!!");
    score++;
  }else{
    console.log("Nahhhh!!!!Wrong Answer");
  }

  console.log("The correct answer is : "+answer);
}

var questions_level_one = [{
  question : "Where do I live ? \na.Asansol.\nb.Raniganj.\nc.Durgapur. \n",
  answer : "b"
},{
  question : "What do I love the most ?\na.Playing cricket.\nb.Watching sports.\nc.Binge Watching movies and web shows. \n ",
  answer : "c"
},{
  question : "What is my nick-name ? \na.Gaurav.\nb.Sachin.\nc.Subham.\n",
  answer : "a",
}]

for(var i=0;i<questions_level_one.length;i++){
  game(questions_level_one[i].question,questions_level_one[i].answer);
}

if(score>=2){
  console.log("Yaayyyy!!!! You're through to the next round..");
}else{
  console.log("Sorry!! You're eliminated..");
}

console.log("Your final score for Level-01 is : " +score);

console.log("Congratulation for qualifying to the next round.\nHope you are enjoying this game.\n");

console.log("Level-02");

function question1(question,answer){
  var question1 = readlineSync.question(question);

  console.log(question1);
  if(question1===answer){
    console.log("Great!!! You're doing a great job.");
    score++;
  }else{
    console.log("Oops....This was not the right answer.")
  }
  console.log("The correct answer is : " +answer);
}

var questions_level_two = [{
  question : "What do I like to do most of the times ?\na.Binge watching things.\nb.Procastinate.\n",
  answer : "b",
},{
  question : "What is my favorite web shows of all time ?\na.Peaky Blinders.\nb.Yet to come.\n",
  answer : "b",
}]

for (var i=0;i<questions_level_two.length;i++){
  question1(questions_level_two[i].question,questions_level_two[i].answer);
}

if(score>=4){
  console.log("Wow!!! You're just one step away from winning the treat.");
}else{
  console.log("OHH NOO.You missed by a whisker.");
}

console.log("Your final score for Level-02 is : " +score);

console.log("Soo far you're doing great,only one question away.......");

console.log("Ready for the final question");

console.log("Final Question......")

var question = readlineSync.question("What is my go to word ? ");
console.log(question);
var answer = "good";

if(question===answer){
  console.log("Yayyyy !!! You won......")
}else{
  console.log("Hard Luck.Try again next time")

}

console.log("The correct answer is : "+answer);

console.log("Your Final Score is : "+score);
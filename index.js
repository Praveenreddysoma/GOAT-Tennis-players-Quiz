var readlinesync = require("readline-sync");
const chalk = require('chalk');
console.log(chalk.blue('Hello!'));
var username=readlinesync.question(chalk.blue("what is your name? "));
console.log(chalk.cyan(" Welcome "+username+ " To GOAT Tennis players Quiz!"));
var score = 0
var favourite=readlinesync.question(chalk.blue("who is your favourite tennis player among Federer and Nadal ? " ));

if (favourite==="federer"){
function play(question,answer){
  var useranswer=readlinesync.question(question);
  if(useranswer===answer){
      console.log(chalk.green("you are right!"));
    score=score+1  
  }else{
    console.log(chalk.red("you are wrong"));
  }
console.log(chalk.yellow("your score: "+score));
}

var questions = [
  {
    question: chalk.green("How many grandslams Federer won? "),
    answer: "20" ,
  },
  {
    question: chalk.green("How many US opens Federer won? "),
    answer: "5" ,
  },
  {
    question: chalk.green("How many Wimbledone opens Federer won? "),
    answer: "8" ,
  },
  {
    question: chalk.green("How many French opens Federer won? "),
    answer: "1" ,
  },
  {
    question: chalk.green("How many Australian opens Federer won? "),
    answer: "6" ,
  },
]
for(var i=0; i<questions.length; i++){
  var currentquestion=questions[i]
  play(currentquestion.question,currentquestion.answer)
}
 } else{

  function play(question,answer){
  var useranswer=readlinesync.question(question)
  if(useranswer===answer){
    console.log(chalk.green("you are right!"))
    score=score+1  
  }else{
    console.log(chalk.red("you are wrong"))
  }
console.log(chalk.yellow("your score: "+score))
}

var questions = [
  {
    question: chalk.magenta("How many grandslams Nadal won? "),
    answer: "20" ,
  },
  {
    question: chalk.magenta("How many US opens Nadal won? "),
    answer: "4" ,
  },
  {
    question: chalk.magenta("How many Wimbledone opens Nadal won? "),
    answer: "2" ,
  },
  {
    question: chalk.magenta("How many French opens Nadal won? "),
    answer: "13" ,
  },
  {
    question: chalk.magenta("How many Australian opens Nadal won? "),
    answer: "1" ,
  },
]
for(var i=0; i<questions.length; i++){
  var currentquestion=questions[i]
  play(currentquestion.question,currentquestion.answer)
}
}

console.log(chalk.greenBright("Yay! you scored: "+score))
console.log(chalk.cyan("check out high scores below, If you should be there ping me with your high score screen shot, I will upadte it"))

var highscores = [
  {
  name: chalk.yellow("Praveen soma: 5"),
  },
  {
   name: chalk.yellow("Naveen soma: 4"),
  }
]

for(var j=0; j<highscores.length;j++){
console.log(highscores[j].name);
}

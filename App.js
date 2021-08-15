var readlineSync=require('readline-sync');

var score=0;

var question="Q.The soldiers laughing and drinking on duty belonged to which regiment?  ";
var answer="Garrison Regiment";
var regiment=['Scout Regiment', 'Garrison Regiment', 'Military Police Regiment'];

index = readlineSync.keyInSelect(regiment,question );
console.log(regiment[index])
if(regiment[index]===answer){
  console.log("correct answer");
  score=score+1;
}



var questionone="Q.The second appearance of colossal titan was in? ";
var answerone="Trost District";
var district =["Shiganshina District","Trost District","Stohess District"];

index = readlineSync.keyInSelect(district,questionone);
console.log(district[index])
if(district[index]===answerone){
  console.log("correct answer");
  score=score+1;
}

var questiontwo="Q.Mikasa,Armin and Eren were enlisted in? ";
var answertwo="104th cadet corps";
var corps =["104th cadet corps","109th cadet corps","110th cadet corps"];

index = readlineSync.keyInSelect(corps,questiontwo);
console.log(corps[index])
if(corps[index]===answertwo){
  console.log("correct answer");
  score=score+1;
}
var questionthree="Q.Which is the tallest titan? ";
var answerthree="Colossal Titan";
var titans =["Attack titan","Rod Reiss's Titan form","Armoured titan","Colossal Titan"];

index = readlineSync.keyInSelect(titans,questionthree);
console.log(titans[index])
if(titans[index]===answerthree){
  console.log("correct answer");
  score=score+1;
}
console.log("You Scored:",score);
var scoreboard=[
  {
    name:"Hajime Isayama",
    score:3,
  }
];
function comparescore(){
  for(var i=0;i<scoreboard.length;i++)
    if(score>scoreboard[i].score)
    {
       console.log("✨✨✨✨✨✨✨");
        console.log("🎉🎉🎉Congratulations🎉🎉🎉");
        console.log("Send me a screenshot😇");
        console.log("✨✨✨✨✨✨✨");
  }
 };
console.log(comparescore(score));

    



setInterval(myFunction,1000); // requires 2 parameters : A function with the operations , interval in ms
  function myFunction() {
  
  
    var DateObj = new Date();
    var hour = DateObj.getHours();
    var minute = DateObj.getMinutes();
    var seconds = DateObj.getSeconds();
    var PMAM = "AM";
  

     
    var realtime = document.getElementById("clock").innerHTML =  "Time" + " " + " " + hour + " : " + minute + " : " + seconds + " " + PMAM;
     
    console.log(realtime);
    document.getElementById("clock").style.fontSize = "30px"   ;
    document.getElementById("clock").style.padding = "10px 0  0 0" ;
   
    if(hour>=6 && hour<10){
      document.getElementById("changetxt").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
   
    }
   else if(hour>=10 && hour<12){
      document.getElementById("changetxt").innerText = "LET'S HAVE SOME LUNCH !!";
  
    }
   else if(hour>=12 && hour<20){
      document.getElementById("changetxt").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
 
    }
    else{
      document.getElementById("changetxt").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
  
    }
    
    if (hour >= 12) {
      hour -= 12;
      PMAM = "PM";
    }
  
    if (hour < 10) {
      hour = "0" + hour;
    }
  
    if (minute < 10) {
      minute = "0" + minute;
    }
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  }








//   function perform() {

//     let morningTime = document.getElementById("getmorning")

// let afternoonTime = document.getElementById("getafternoon")

// let eveningTime = document.getElementById("getevening")

// let nigthTime = document.getElementById("getnight")

// let para = document.querySelector("p")

// let image = document.getElementById("changingimg")

//     let time= new Date()
//     let hour = time.getHours()
   
//     if(parseInt(morningTime.value === hour))
//   {
//     para.innerHTML = "GOOD MORNING WAKE UP !!"  
//     // image.src = "./windogirl.png"
   
//   }
//   else if(parseInt(afternoonTime.value === hour)){
    
//      para.innerHTML = "Good Afternoon !!"

//   }
//   else if(parseInt(eveningTime.value === hour))
//   {
//    para.innerHTML = "Good Evening..!"
    
//   }
//   else{
//      para.innerHTML ="Good Nigth..!!"
//     image.src = "./nigth image.jpg"   
//   }

// }


 function timetoparty(){

  document.getElementById("button").innerHTML="Party Time!"

 }
function realtxt(){
   document.getElementById("button").innerHTML="Set Alarm"
 }

function perform(){

let itsmorning=document.querySelector("#getmorning");
let action1 = itsmorning.options[document.getElementById("getmorning").selectedIndex];

let lunch = document.querySelector("#getafternoon");
let action2 = lunch.options[document.getElementById("getafternoon").selectedIndex];

let naptime = document.querySelector("#getevening");
let action3=naptime.options[document.getElementById("getevening").selectedIndex];

let timetosleep=document.querySelector("#getnight");
let action4 = timetosleep.options[document.getElementById("getnight").selectedIndex];

let store = document.getElementsByClassName("setme");
store[0].innerText= `Wake up Time:${action1.text}`;
store[1].innerText=`Lunch Time:${action2.text}`;
store[2].innerText=`Nap Time:${action3.text}`;
store[3].innerText=`Night Time:${action4.text}`;

let mail=document.getElementById("msg");
var photo =document.getElementById("changingimg")


let time=new Date();
let hours=time.getHours();
if(hours === parseInt(itsmorning.value))
{

   mail.innerHTML = "GOOD MORNING...!!";

  photo.src = "./windogirl.png";
}
 else if(hours === parseInt(lunch.value))
{
  mail.innerHTML = "GOOD AFTERNOON...!!";

  photo.src = "./Component 31 – 1.svg ";
}

else if(hours === parseInt(naptime.value))
{
   mail.innerHTML = "GOOD EVENING...!!";
   photo.src = "./evening_image.png";
}

else if(hours === parseInt(timetosleep.value))
{
  mail.innerHTML = "GOOD NIGHT...!!";
  photo.src = "./goodnight_image.svg";
 }

}
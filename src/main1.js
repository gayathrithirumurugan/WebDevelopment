function ageinDays()
{ 
var result=0;
const input= prompt('Type your start in format dd-mm-yyyy');
const[inputdate,mon,inputYear]= input.split('-');
inputmonth=mon-1;
const end=prompt('Type your end date in format dd-mm-yyyy');
const[presentDate,mont,presentYear]= end.split('-');
presentMonth=mont-1;
var month=[31,28,31,30,31,30,31,31,30,31,30,31];
var leapcount=0;
function countLeap(year)
{
for(i=year;i<=presentYear;i++)
{
    if(i%4==0)
    {
     leapcount++;    
    }
}
if(inputYear%4==0 && inputmonth>1)
{
    leapcount--;
}
if(presentYear%4==0 && presentMonth<1)
{
    leapcount--;
}
// if(inputYear%4==0 && inputmonth==1 && inputdate==29) //Feb 29,2000 means adding leap in count
// {
//     leapcount++;
// }
// if(presentYear%4==0 && presentMonth==1 && presentDate==29) //Feb 29,2000 means adding leap in count
// {
//     leapcount++;
// }
return leapcount;
}
leapcount=countLeap(inputYear);
var final=checkMonth(presentDate,presentMonth,presentYear,inputdate,inputmonth,inputYear);
final=final+leapcount;
console.log("Final total days",final);
document.getElementById('flex-box-result').innerHTML= 'Total days on the earth '+ final;
function checkMonth(presentDate,presentMonth,presentYear,inputdate,inputmonth,inputYear)
{
    if(presentMonth==inputmonth)
    {
        if(presentDate==inputdate)
        {
            result=(presentYear - inputYear)*365;
            return result;
        }
        else if(presentDate<inputdate)
        {
            var temp=(presentYear - inputYear)*365;
            result=temp-(inputdate-presentDate);
            return result;
        }
        else if(presentDate>inputdate)
        {
            var temp=(presentYear - inputYear)*365;
            result=temp+(presentDate-inputdate);
            return result;
        }
    }

        else if(presentMonth<inputmonth)
        {
            var temp=(presentYear - inputYear ) *365 ;
            var s=presentMonth+1;
            var range=0;
            for(let i= s;i<inputmonth;i++)
            {
             range=range+month[i];
            }
            range= range+parseInt(inputdate)+(month[presentMonth] - parseInt(presentDate));
            result=temp-range;
            return result;
        }
        else if(presentMonth>inputmonth)
        {
            var temp=(presentYear - inputYear ) *365 ;
            var s=inputmonth+1;
            var range=0;
            for(let i=s;i<presentMonth;i++)
            {
                    range=range+month[i];
            }
          range=range+parseInt(presentDate)+ (month[inputmonth] - parseInt(inputdate));
          result=temp+range;
          return result;
        }
    
}
var h1=document.createElement('h1');
var text=document.createTextNode('you are ' + final + ' old on ' + end);
h1.setAttribute('id','ageindays');
h1.appendChild(text);
document.getElementById("flex-box-result").appendChild(h1);
}
function reset()
{
    document.getElementById("flex-box-result").remove();
}
function generate()
{
    var img= document.createElement('img');
    img.src="https://c.tenor.com/Ele-7klS6bsAAAAM/birds-bird.gif";
    var divs=document.getElementById("flex-box2-result");
    divs.appendChild(img);
}

    var run;
    function getval()
    {
     window.run=document.getElementById("runs").value;
      console.log("run",run);
     
    }
   var check=0;
   var winner=new Array();
   var arg=new Array();
   var x=0;
   var y=0;
   var hcount =0;
   var Comcount=0;
function rpsgame(choice)
{
  ++check;
  if(check<=run)
  {
  var humanChoice=choice.id;
  console.log("HUman",humanChoice);
  var coumputerChoice=randomNumber();
  console.log("computer",coumputerChoice);
  
   winner=decideWinner(humanChoice,coumputerChoice,hcount,Comcount);
  x=x+ winner[0];
  y=y+winner[1];
  arg[0]=x;
 arg[1]=y;
 var msg= finalmessages(winner);
 Messagedisplaydesign(humanChoice,coumputerChoice,msg);
  }
  else{
    check=0;
    hcount=0;
    Comcount=0;
    alert("excedd limit");
    Totalscore(arg);
     arg=[];
    x=0;y=0;}
  
}
function finalmessages(input)
{
  if(input[0]===1 && input[1]===0)
  {
    return{'message':'You Won', 'color':'Green'}
  }
  else if(input[0]===0 && input[1]===1)
  {
    return{'message':'You Lost', 'color':'Red'}
  }
  else if(input[0]===0 && input[1]===0)
  {
    return{'message':'Its a draw', 'color':'yellow'} 
  }
}
function Messagedisplaydesign(humanChoice,coumputerChoice,msg)
{
  var s=document.getElementById("old");
  var old=s.innerHTML;
  var imgdb={
    'rock': document.getElementById('rock').src,
    'scissor':document.getElementById('scissor').src,
    'paper':document.getElementById('paper').src
  };

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var humandiv=document.createElement('div');
  var messagediv=document.createElement('div');
  var comdiv=document.createElement('div');
   
  humandiv.innerHTML="<img src='"+imgdb[humanChoice] +"'height=150; width=150; style='box-shadow: 0px 10px 13px -7px #000000, 4px 6px 39px 10px rgba(57,18,230,0.92);'>"
messagediv.innerHTML="<h1 style='color:"+msg['color'] +" ;'>" + msg['message'] +"</h1>";
comdiv.innerHTML="<img src='" +imgdb[coumputerChoice] +"' height=150; width=150; style=' box-shadow: 0 10px 50px rgba(248, 38, 24, 1);'>"  
 
  document.getElementById('flex-box3-result').appendChild(humandiv);
  document.getElementById('flex-box3-result').appendChild(messagediv);
  document.getElementById('flex-box3-result').appendChild(comdiv);
setTimeout(function(){s.innerHTML=old},2000);
//s.innerHTML=old;
  
}
function Totalscore(array)
{
  if(array[0]>array[1])
  {
    alert("human wins " +array[0]);
  }
  else if (array[0] < array[1])
  {
    alert("Computer wins " +array[1]);
  }
  else if(array[0]==array[1])
  {
    alert("Its a draw Match");
  }
}
function randomNumber()
{
    return ['rock','paper','scissor'][Math.floor(Math.random()*3)];
    //Math.floor return integer values and *3 returns only values 0,1,2
}
function decideWinner(humanChoice,coumputerChoice,hcount,Comcount)
{
    // var i=1;
    // while(i<=run){
      var temp=new Array();
      var dbs={
        'rock':{'rock':0 , 'paper':0, 'scissor':1},
        'paper':{'paper':0 , 'rock':1, 'scissor':0},
        'scissor':{'scissor':0, 'rock':0, 'paper':1}
      };

      hcount=dbs[humanChoice][coumputerChoice];
      Comcount=dbs[coumputerChoice][humanChoice];
  
temp[0]=hcount;
temp[1]=Comcount;
return temp;
}


var allbuttons = document.getElementsByTagName('button');
console.log(allbuttons);
var copy_allbutton=[];
for(let i=0;i<allbuttons.length; i++)
{
  copy_allbutton[i] =allbuttons[i].classList[1];

}
function buttonchangeColor(option)
{
  if(option.value==='red')
  {
    for(let i=0;i<allbuttons.length ; i++)
    {
      allbuttons[i].classList.replace(allbuttons[i].classList[1],'btn-danger');
    }
  }

  if(option.value==='green')
  {
    for(let i=0;i<allbuttons.length ; i++)
    {
      allbuttons[i].classList.replace(allbuttons[i].classList[1],'btn-success');
    }
  }
  if(option.value==='reset')
  {
    for(let i=0;i<allbuttons.length ; i++)
    {
      allbuttons[i].classList.replace(allbuttons[i].classList[1],copy_allbutton[i]);
    }
  }
  if(option.value==='yellow')
  {
    for(let i=0;i<allbuttons.length ; i++)
    {
      allbuttons[i].classList.replace(allbuttons[i].classList[1],'btn-warning');
    }
  }
}


// My own try Toggle
//const query=document.querySelector("#hit-button");
// console.log(query.classList);
// query.addEventListener('click',function(){
//   query.classList.toggle('g');
// });
// console.log("Query",query);
let blackJackGame={
  'player':{'scorespan':'#flex-player-result','div':'#flex-player-box','score':0},
  'Computer':{'scorespan':'#flex-computer-result','div':'#flex-computer-box','score':0},
  'cards':['2','3','4','5','6','7','8','9','k','Q','J','A'],
  'cardscore':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10, 'Q':10 ,'J':10,'A':[1,11]},
  'wins':0,
  'loss':0,
  'draw':0
};
const hitsound= new Audio('./src/sounds/swish.m4a');
const winsound=new Audio('./src/sounds/cash.mp3');
const losssound=new Audio('./src/sounds/aww.mp3');
document.querySelector("#hit-button").addEventListener('click',Hitbuttonfunc);
document.querySelector("#deal-button").addEventListener('click',dealbuttonfunc);
document.querySelector("#stand-button").addEventListener('click',standButtonfunc);
function Hitbuttonfunc()
{
  let cards=randomcards();
  showcard('player',cards);
  updatescore('player',cards);
  showscores('player',cards);
  console.log("Player",blackJackGame['player']['score']);
}
function dealbuttonfunc()
{
let winner= computeWinner();
showresult(winner);
  let playerimg=document.querySelector('#flex-player-box').querySelectorAll('img');
 let dealerimg=document.querySelector('#flex-computer-box').querySelectorAll('img');
for(let i=0;i<playerimg.length;i++)
{
  playerimg[i].remove();
}
for(let i=0;i<dealerimg.length;i++)
{
  dealerimg[i].remove();
}
blackJackGame['player']['score'] = 0;
blackJackGame['Computer']['score'] = 0;
document.querySelector(blackJackGame['player']['scorespan']).innerText = 0;
document.querySelector(blackJackGame['player']['scorespan']).style.color = 'white';
document.querySelector(blackJackGame['Computer']['scorespan']).innerText = 0;
document.querySelector(blackJackGame['Computer']['scorespan']).style.color = 'white';
setTimeout( function(){
document.querySelector('#jack1').innerText="let's play";
 document.querySelector('#jack1').style.color='black';}, 2000);

}
function standButtonfunc()
{
  let cards=randomcards();
  showcard('Computer',cards);
  updatescore('Computer',cards);
  showscores('Computer',cards);
  console.log("Computer",blackJackGame['Computer']['score']);
}

function showcard(activeplayer,cards)
{
  if(blackJackGame[activeplayer]['score']<=21){
  let card=document.createElement('img');
  card.src=`./src/images/${cards}.png`;
 document.querySelector(blackJackGame[activeplayer]['div']).appendChild(card);
 hitsound.play();
  }
}
function randomcards()
{
  let index=Math.floor(Math.random()*13);
  return blackJackGame['cards'][index];
}
function updatescore(activeplayer,cards)
{
  if (cards==='A')
  {
    if(blackJackGame[activeplayer]['score'] + blackJackGame['cardscore'][cards][1] <=21){
 blackJackGame[activeplayer]['score'] += blackJackGame['cardscore'][cards][1];}
 else{
  blackJackGame[activeplayer]['score'] += blackJackGame['cardscore'][cards][0];
 }
  }
  else{
  blackJackGame[activeplayer]['score'] += blackJackGame['cardscore'][cards];
}
}
function showscores(activeplayer,cards)
{
  if(blackJackGame[activeplayer]['score'] <=21)
{
 document.querySelector(blackJackGame[activeplayer]['scorespan']).innerText =blackJackGame[activeplayer]['score'];}
 else
 {
  document.querySelector(blackJackGame[activeplayer]['scorespan']).innerText = 'BUST';
  document.querySelector(blackJackGame[activeplayer]['scorespan']).style.color = 'red';
 }
}
function computeWinner()
{
  let winner;
  if(blackJackGame['player']['score'] <=21 && blackJackGame['Computer']['score'] <= 21)
  {
    if(blackJackGame['player']['score'] > blackJackGame['Computer']['score'])
    {
      blackJackGame['wins']++;
      document.querySelector('#wins').innerText= blackJackGame['wins'];
      alert("You Won!");
      winner=blackJackGame['player'];
     
    }
    else if(blackJackGame['player']['score'] < blackJackGame['Computer']['score'])
    {
      blackJackGame['loss']++;
      document.querySelector('#losses').innerText= blackJackGame['loss'];
      alert("You Lost!");
      winner = blackJackGame['Computer'];
     
    }
    else if(blackJackGame['player']['score'] === blackJackGame['Computer']['score'])
    { blackJackGame['draw']++;
    document.querySelector('#draws').innerText= blackJackGame['draw'];
      alert("you drew");
     
    }
  }
  else if(blackJackGame['player']['score'] <=21 && blackJackGame['Computer']['score'] > 21)
    { blackJackGame['wins']++;
     document.querySelector('#wins').innerText = blackJackGame['wins'];
      alert("You Won!");
     winner=blackJackGame['player'];
    }
   else if(blackJackGame['player']['score'] > 21 && blackJackGame['Computer']['score'] <= 21)
    { blackJackGame['loss']++;
    document.querySelector('#losses').innerText= blackJackGame['loss'];
    alert("you lost");
  winner=blackJackGame['Computer'];
}
else if(blackJackGame['player']['score'] > 21 && blackJackGame['Computer']['score'] > 21)
{
   blackJackGame['draw']++;
document.querySelector('#draws').innerText = blackJackGame['draw'];
   alert("You drew!");
  
}
return winner;
}
function showresult(winner)
{
  

 if(winner === blackJackGame['player'])
 {
  document.querySelector('#jack1').innerText='you won!';
  document.querySelector('#jack1').style.color='green';
  winsound.play();
 }
 else if(winner === blackJackGame['Computer'])
 {
  document.querySelector('#jack1').innerText='you Lost!';
  document.querySelector('#jack1').style.color='red';
 losssound.play();
 }
 else{
  document.querySelector('#jack1').innerText='Its Drew';
  document.querySelector('#jack1').style.color='yellow';
 }

 //setTimeout(function(){s.innerHTML=old},2000);
 return 1;

}
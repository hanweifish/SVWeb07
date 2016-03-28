/*
 * Request: Javascript
 *
 */
// PART 1
// Design and Code a StopWatch Sample Use Case:

// var sw = new StopWatch();
//     sw.start().stop().start().log();
//       => 0

//     <= wait 123 milliseconds
//     sw.log();
//       => 123;

//     <= wait 100 milliseconds
//     sw.stop().log();
//       => 223

//     <= wait 1000 milliseconds
//     sw.log();
//       => 223

//     sw.reset().log();
//       => 0





function stopWatch(){
  var startTime = 0;
  var stopTime = 0;
  var running = false;
  var curTime = 0;

  // this.getStartTime = function(){
  //   console.log(startTime);
  // }

  // this.getLogTime = function(){
  //   return console.log(curTime);
  // }
    
  // return time at a given time point
  function getTime(){
    var day = new Date();
    return day.getTime();
  }
  
  //start counting function
  this.start = function(){
    if(running === true){
      return;
    }
    else if(startTime !== 0){
      stopTime = 0;
    }
    running = true;
    startTime = getTime();
  };

  //stop counting function
  this.stop = function(){
    if(running === false){
      return;
    }
    stopTime = getTime();
    running = false;
  };

  //reset the time
  this.reset = function(){
    startTime = 0;
  };

  // get the time log
  this.log = function(){
    if(startTime == 0){
      return 0;
    }
    else if(running == false){
      return (stopTime - startTime);
    }
    else{
      curTime = getTime();
      return(curTime - startTime);
    }
  };
}

//function to delay 
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


var sw = new stopWatch();

//start stopwatch
sw.start();

// sw.getStartTime();
// sw.getLogTime();

//stop stopwatch
sw.stop();

//console the log
console.log("time count of immediate stop after start: " + sw.log());

//start stopwatch
sw.start();

//deplay 123 milliseconds here
sleep(122);

//log after delay 123 milliseconds
console.log("wait 123 milliseconds to log: " + sw.log() + " millisecconds");

//delya 100 milliseconds and stop
sleep(99);
sw.stop();

//log after delay 100 milliseconds
console.log("wait 100 milliseconds to log: " + sw.log() + " millisecconds");

//delya 1000 milliseconds
sleep(1000);

//log the time after delay 1000 milliseconds with stop at 223 milliseconds
console.log("wait 1000 milliseconds to log: " + sw.log() + " millisecconds");

//reset
sw.reset();

//result for reset
console.log("result for reset: " + sw.log());









// PART 2 
// Design and Code a Racer using the StopWatch you just made Sample Use Case:

//     var sumeet = new Racer();
//     var travis = new Racer();
//     var harshit = new Racer();

//     console.log(Racer.all[0] === sumeet);
//       => true
//     console.log(Racer.all[1] === travis);
//       => true
//     console.log(Racer.all[2] === harshit);
//       => true

//     Racer.all.start();
//     sumeet.stop().log();
//       =>0
//     <= wait 1000 milliseconds
//     harshit.stop().log();
//       => 1000

//     <= wait 1000 milliseconds
//     travis.stop().log();
//       => 2000

//     console.log(Racer.getWinner() === sumeet);
//       => true



function Racer(name) {
  this.name = name;
  this.stopWatch = new stopWatch();
  
  Racer.all.push(this);
}

Racer.all = [];

Racer.all.start = function() {
  for (var i = 0; i < Racer.all.length; i++) {
    Racer.all[i].start();
  }
};

Racer.all.stop = function() {
  for (var i = 0; i < Racer.all.length; i++) {
    Racer.all[i].stop();
  }
};

Racer.getWinner = function() {
  var found = Racer.all[0];
  
  for (var i = 0; i < Racer.all.length; i++) {
    if (Racer.all[i].log() < found.log())
      found = Racer;
  }
  
  return found;  
};

Racer.prototype.start = function(){
  this.stopWatch.start();
  return this;
};

Racer.prototype.stop = function() {
  this.stopWatch.stop();
  return this;
};

Racer.prototype.log = function() {
  return this.stopWatch.log();
};

var sumeet = new Racer("sumeet");
var travis = new Racer("travis");
var harshit = new Racer("harshit");

console.log(Racer.all[0] === sumeet);
console.log(Racer.all[1] === travis);
console.log(Racer.all[2] === harshit);

//start race
Racer.all.start();

//stop race for sumeet
sumeet.stop();
console.log("running time for sumeet: " + sumeet.log());

//stop race for travis
sleep(999);
console.log("running time for travis: " + travis.log());

//stop race fr harshit
sleep(999);
console.log("running time for harshit: " + harshit.log());

//console the winner
console.log(Racer.getWinner() === sumeet);










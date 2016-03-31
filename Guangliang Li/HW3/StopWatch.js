function StopWatch() {
  var startTime = 0;
  var stopTime = 0;
  var duration = 0;
  var currTime = function(){
    return new Date().getTime();
  };

  this.runningStatus = function() {
    return startTime !== 0;
  };

  this.start = function(){
    startTime = startTime === 0 ? currTime() : startTime;
    return this;
  };

  this.stop = function(){
  	stopTime = startTime === 0 ? stopTime : currTime();
    duration = stopTime - startTime;
    startTime = 0;
    return this;
  };

  this.reset = function() {
    startTime = startTime === 0 ? startTime : currTime();
    stopTime = 0;
    return this;
  };

  this.getRunningTime = function(){
  	return duration;
  }

  this.log = function() {
  	var runningTime = startTime === 0 ? duration : currTime() - startTime;
    console.log(runningTime);
    return this;
  };
}

function wait(interval){
  var start = new Date().getTime();
  while(true){
  	if(new Date().getTime() - start > interval){
  	  break;
  	}
  }
}
// var sw = new StopWatch();
// sw.start().stop().start().log();

// wait(123);
// sw.log();

// wait(100);
// sw.stop().log();

// wait(1000);
// sw.log();

// sw.reset().log();

function Racer() {
  StopWatch.call(this);
}
Racer.all = [];

Racer.all.start = function() {
  var i;
  for (i = 0; i < Racer.all.length; i++) {
    Racer.all[i].start();
  }
};

Racer.getWinner = function() {
  var winner = null;
  var record = 0;
  var i;
  for(i = 0; i < Racer.all.length; i++) {
  	if (Racer.all[i].runningStatus() === false){
      if(winner === null || Racer.all[i].getRunningTime() < record){
      	winner = Racer.all[i];
      	record = Racer.all[i].getRunningTime();
      }
  	}
  }
  return winner;
};


var sumeet = new Racer();
var travis = new Racer();
var harshit = new Racer();

console.log(Racer.all[0] === sumeet);
console.log(Racer.all[1] === travis);
console.log(Racer.all[2] === harshit);

Racer.all.start();
sumeet.stop().log();

wait(1000);
harshit.stop().log();

wait(1000);
travis.stop().log();

console.log(Racer.getWinner() === sumeet);
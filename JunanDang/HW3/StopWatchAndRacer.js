function sleep(interval) {
  var start = new Date().getTime();
  //noprotect
  while (new Date().getTime() - start < interval) {}
}

function StopWatch() {
  var start = 0;
  var elapsed = 0;

  var currTime = function() {
    return new Date().getTime();
  };

  this.start = function() {
    start = start ? start : currTime();
    return this;
  };

  this.stop = function() {
    elapsed = start ? elapsed + currTime() - start : elapsed;
    start = 0;
    return this;
  };

  this.reset = function() {
    start = elapsed = 0;
    return this;
  };

  this.log = function() {
    var logTime = start ? elapsed + currTime() - start : elapsed;
    console.log(logTime);
    return this;
  };

  this.running = function() {
    return start !== 0;
  };

  this.getElapsed = function() {
    return elapsed;
  };
}

function Racer() {
  StopWatch.call(this);
  Racer.all.push(this);
}

Racer.all = [];

Racer.all.start = function() {
  for (var i = 0; i < Racer.all.length; i++) {
    Racer.all[i].start();
  }
};

Racer.getWinner = function() {
  var winner = null;
  for (var i = 0; i < Racer.all.length; i++) {
    if (Racer.all[i].running() === false) {
      if (winner === null || Racer.all[i].getElapsed() < winner.getElapsed()) {
        winner = Racer.all[i];
      }
    }
  }
  return winner;
};

var sw = new StopWatch();
sw.start().stop().start().log();

sleep(123);
sw.log();

sleep(100);
sw.stop().log();

sleep(1000);
sw.log();

sw.reset().log();

var sumeet = new Racer();
var travis = new Racer();
var harshit = new Racer();

console.log(Racer.all[0] === sumeet);
console.log(Racer.all[1] === travis);
console.log(Racer.all[2] === harshit);

Racer.all.start();
sumeet.stop().log();

sleep(1000);
harshit.stop().log();

sleep(1000);
travis.stop().log();

console.log(Racer.getWinner() === sumeet);

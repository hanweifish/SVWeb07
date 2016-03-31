
function StopWatch(){
	var start = 0;
	var lap = 0;

	var now = function(){
		return (new Date()).getTime();
	};

	this.start = function(){
		start = start ? start : now();
		return this;
	};

	this.stop = function(){
        lap = start ? lap + now() - start : lap;
        start = 0; // paused
        return this;
	};

	this.reset = function(){
		lap = start = 0;
		return this;
	};

	this.log = function(){
		var duration = lap + (start ? now() - start : 0);
		console.log(duration);
		return this;
	};

	this.getLap = function(){
		return lap;
	};
}

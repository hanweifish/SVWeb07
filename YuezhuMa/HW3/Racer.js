Racer.all = [];
function Racer(name) {
	this.name = name;
	StopWatch.call(this);
	Racer.all.push(this);
}

Racer.all.start = function() {
	for (var i = 0; i < Racer.all.length; i++) {
		Racer.all[i].start();
	}
};

Racer.getWinner = function() {
	var fastest = Racer.all[0];
	for (var i = 1; i < Racer.all.length; i++) {
		if (Racer.all[i].getLap() < fastest.getLap()) {
			fastest = Racer.all[i];
		}
	}
	return fastest;
};
